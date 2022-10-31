import './article-item.js';

class ArticleList extends HTMLElement{
    set articles(articles){
        this._articles=articles;
        this.render();
    }
    render(){
        this._articles.forEach(article => {
            const articleItemElement=document.createElement('article-item');
            //memangil fungsi setter aricles() pada artciles-item.
            articleItemElement.article=article;
            this.appendChild(articleItemElement);
        });
    }

}

customElements.define('article-list', ArticleList);