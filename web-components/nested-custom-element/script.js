import './article-list.js';
import articles from './articles.js';

const articlesListElement=document.createElement('article-list');

articlesListElement.articles=articles;
document.body.appendChild(articlesListElement);
