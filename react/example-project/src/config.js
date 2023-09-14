export const RoleTypes = {
    none: 0,
    user: 1,
    business: 2,
    admin: 3,
};

export const checkPermissions = (permissions, userRoleType) => {
    return permissions.includes(userRoleType);
}

export const pages = [
    { route: '/about', title: 'אודות' },
    { route: '/login', title: 'התחבר', permissions: [RoleTypes.none] },
    { route: '/signup', title: 'הרשמה', permissions: [RoleTypes.none] },
    { route: '/favorite', title: 'מועדפים', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
    { route: '/my-cards', title: 'הכרטיסים שלי', permissions: [RoleTypes.business, RoleTypes.admin] },
    { route: '/admin', title: 'ניהול משתמשים', permissions: [RoleTypes.admin] },
];

export const settings = [
    { route: '/account', title: 'אזור אישי', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
];