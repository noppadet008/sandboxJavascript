var _ = require('lodash');
class PostEdit {

    constructor(postEdit) {
        this.postID = postEdit.postID;
        this.title = postEdit.title;
        this.text= postEdit.text;
        this.s = undefined;
    }



    toJSON() {
    let {postID, title, text,s} = this;
    return {postID, title, text};
  }

  toJSON2(){
      var a = JSON.stringify(this);
      _(a).forEach(function (m,n) {
            if(_.isUndefined(m))
                _.remove(m );
        });
        return a;
  }
}

var s = new PostEdit({
    postID: '2',
    title: '3',
    text: '4'
});

console.log(s.toJSON());