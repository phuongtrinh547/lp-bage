export const ROUTES = {
  HOME: '/',
  BONDS: '/bonds',
  FAQ: '/faq',
  HOW_IT_WORKS: '/how-it-works',
  FEATURES: '/features',
  START: '/start',
  LOGIN: '/login',
  REGISTER: '/register',
};

export const HEADER_TABS = [
  {
    label: 'ホーム',
    path: ROUTES.HOME,
  },
  {
    label: '債権一覧',
    path: ROUTES.BONDS,
  },
  {
    label: '特徴',
    path: ROUTES.FEATURES,
  },
  {
    label: '仕組み',
    path: ROUTES.HOW_IT_WORKS,
  },
  {
    label: 'はじめ方',
    path: ROUTES.START,
  },
  {
    label: 'FAQ',
    path: ROUTES.FAQ,
  },
];

export const AUTH_STATUS = {
  UNAUTHENTICATED: 'unauthenticated',
  AUTHENTICATED: 'authenticated',
  LOADING: 'loading',
};
