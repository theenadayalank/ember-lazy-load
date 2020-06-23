import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked
  isLoading = false;

  messageList = [];

  pageToken = '';

  @action
  fetchData() {
    if(this.isLoading) {
      return;
    }

    this.isLoading = true;

    return fetch('https://message-list.appspot.com/messages').then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      return response.json().then((data) => {
        this.set('messageList', this.messageList.concat(data.messages));
        this.pageToken = data.pageToken;
        this.isLoading = false;
      });
    })
    .catch((err) => {
      this.isLoading = false;
      console.log(err);
    });
  }

  @action
  handleScrollEvent(event) {
    let navElement = event.target;

    let soFarScrolled = navElement.scrollTop;
    let totalHeight = navElement.scrollHeight;

    if(soFarScrolled / totalHeight > 0.4) {
      this.fetchData();
    }
  }

  @action
  deleteMessage(event) {
    let target = event.target;
    let messageId = target.dataset.deleteMessage;
    if(messageId) {
      let confirmation = window.confirm('Do you really want to delete this text?'); //eslint-disable-line
      if (confirmation) {
        let { messageList = [] } = this;
        let newList = messageList.filter(message => message.id !== Number(messageId));
        this.set('messageList', newList);
      }
    }
  }
}
