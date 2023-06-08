export const RoutesURI = {
    // pages
    Presentation: { path: "/" },
    Signin: { path: "/account/login" },
    Signup: { path: "/account/register" },
    ForgotPassword: { path: "/forgot-password" },
    ResetPassword: { path: "/reset-password" },
    
    // authorised pages
    DashboardOverview: { path: "/overview" },
    Settings: { path: "/settings" },
    Users: { path: "/users" },
    Bays: { path: "/bays" },
    Buses: { path: "/buses" },
    Shifts: { path: "/shifts" },
    Departures: { path: "/" },

    // misc routes
    Lock: { path: "/lock" },
    NotFound: { path: "/404" },
    ServerError: { path: "/500" }
};