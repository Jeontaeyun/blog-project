import asyncComponent from '../lib/asyncComponent';
export const ListPage = asyncComponent(()=> import('./ListPage'));
export const PostPage = asyncComponent(()=> import('./PostPage'));
export const EditorPagen = asyncComponent(()=> import('./EditorPage'));
export const NotFoundPage = asyncComponent(()=> import('./NotFoundPage'));