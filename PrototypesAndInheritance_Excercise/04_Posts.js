function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let result = `Post: ${this.title}\n`;
            result += `Content: ${this.content}`;
            return result;
        }
    }
    class SocialMediaPost extends Post {
        comments = [];
        constructor(title, content, likes, disklikes) {
            super(title, content);
            this.likes = likes;
            this.disklikes = disklikes;
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let result = super.toString();
            result += `\n`;
            result += `Rating: ${this.likes - this.disklikes}\n`;
            if (this.comments.length > 0) {
                result += `Comments:\n`;
                for (const com of this.comments) {
                    result += ` * ${com}\n`;
                }
            }
            return result.trim();
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views += 1;
            return this;
        }
        toString() {
            let result = super.toString();
            result += `\n`;
            result += `Views: ${this.views}`;
            return result;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}
let asdf = solve();
// let post = new asdf.Post("Post", "Content");

// console.log(post.toString());

// Post: Post
// Content: Content

// let scm = new asdf.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
let blgP = new asdf.BlogPost("TestTitle", "TestContent", 5);
blgP.view().view().view();
console.log(blgP.toString());


