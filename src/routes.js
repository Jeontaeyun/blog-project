// 어떤 주소로 들어오느냐에 따라 방금 만든 함수에 dispatch와 params를 넣어 호출해야 하는데,
// 이 작업을 하려면 라우트의 설정이 담겨 있는 객체를 만들어 주어야한
import { ListPage, PostPage, EditorPage } from "./pages";

export default [
    {
        path: '/',
        exact: true,
        component: ListPage
    },
    {
        path: '/post/:id',
        component: PostPage
    },
    {
        path:'/page/:page',
        component: ListPage
    },
    {
        path: '/tag/:tag/:page?',
        component: ListPage
    },
    {
        path: '/editor',
        component: EditorPage
    }
];