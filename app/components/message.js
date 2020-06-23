import Component from '@glimmer/component';

export default class MessageComponent extends Component {
  domainName = 'https://message-list.appspot.com/';

  get photoUrl() {
    let {
    author: {
      photoUrl = ''
    } = {} } = this.args.message || {};
    return this.domainName + photoUrl;
  }

  get timestamp() {
    let { updated } = this.args.message || {};
    if(!updated) {
      return '';
    }

    let lastUpdated = new Date(updated).getTime();
    let diff = new Date(new Date() - new Date(lastUpdated)).getFullYear() - 1970;

    return `${diff} years ago`;
  }
}
