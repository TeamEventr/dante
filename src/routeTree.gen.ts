/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TicketsIndexImport } from './routes/tickets/index'
import { Route as SupportIndexImport } from './routes/support/index'
import { Route as SettingsIndexImport } from './routes/settings/index'
import { Route as RegisterIndexImport } from './routes/register/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as HelpIndexImport } from './routes/help/index'
import { Route as ExploreIndexImport } from './routes/explore/index'
import { Route as EventIndexImport } from './routes/event/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as ExploreCategoryImport } from './routes/explore/$category'
import { Route as UTicketsIndexImport } from './routes/u/tickets/index'
import { Route as UPurchasesIndexImport } from './routes/u/purchases/index'
import { Route as UFavouritesIndexImport } from './routes/u/favourites/index'
import { Route as UUIdIndexImport } from './routes/u/$uId/index'
import { Route as HostJoinIndexImport } from './routes/host/join/index'
import { Route as HostDashboardIndexImport } from './routes/host/dashboard/index'
import { Route as ExploreEventIdIndexImport } from './routes/explore/$eventId/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TicketsIndexRoute = TicketsIndexImport.update({
  id: '/tickets/',
  path: '/tickets/',
  getParentRoute: () => rootRoute,
} as any)

const SupportIndexRoute = SupportIndexImport.update({
  id: '/support/',
  path: '/support/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsIndexRoute = SettingsIndexImport.update({
  id: '/settings/',
  path: '/settings/',
  getParentRoute: () => rootRoute,
} as any)

const RegisterIndexRoute = RegisterIndexImport.update({
  id: '/register/',
  path: '/register/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const HelpIndexRoute = HelpIndexImport.update({
  id: '/help/',
  path: '/help/',
  getParentRoute: () => rootRoute,
} as any)

const ExploreIndexRoute = ExploreIndexImport.update({
  id: '/explore/',
  path: '/explore/',
  getParentRoute: () => rootRoute,
} as any)

const EventIndexRoute = EventIndexImport.update({
  id: '/event/',
  path: '/event/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const ExploreCategoryRoute = ExploreCategoryImport.update({
  id: '/explore/$category',
  path: '/explore/$category',
  getParentRoute: () => rootRoute,
} as any)

const UTicketsIndexRoute = UTicketsIndexImport.update({
  id: '/u/tickets/',
  path: '/u/tickets/',
  getParentRoute: () => rootRoute,
} as any)

const UPurchasesIndexRoute = UPurchasesIndexImport.update({
  id: '/u/purchases/',
  path: '/u/purchases/',
  getParentRoute: () => rootRoute,
} as any)

const UFavouritesIndexRoute = UFavouritesIndexImport.update({
  id: '/u/favourites/',
  path: '/u/favourites/',
  getParentRoute: () => rootRoute,
} as any)

const UUIdIndexRoute = UUIdIndexImport.update({
  id: '/u/$uId/',
  path: '/u/$uId/',
  getParentRoute: () => rootRoute,
} as any)

const HostJoinIndexRoute = HostJoinIndexImport.update({
  id: '/host/join/',
  path: '/host/join/',
  getParentRoute: () => rootRoute,
} as any)

const HostDashboardIndexRoute = HostDashboardIndexImport.update({
  id: '/host/dashboard/',
  path: '/host/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const ExploreEventIdIndexRoute = ExploreEventIdIndexImport.update({
  id: '/explore/$eventId/',
  path: '/explore/$eventId/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/explore/$category': {
      id: '/explore/$category'
      path: '/explore/$category'
      fullPath: '/explore/$category'
      preLoaderRoute: typeof ExploreCategoryImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/event/': {
      id: '/event/'
      path: '/event'
      fullPath: '/event'
      preLoaderRoute: typeof EventIndexImport
      parentRoute: typeof rootRoute
    }
    '/explore/': {
      id: '/explore/'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof ExploreIndexImport
      parentRoute: typeof rootRoute
    }
    '/help/': {
      id: '/help/'
      path: '/help'
      fullPath: '/help'
      preLoaderRoute: typeof HelpIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/register/': {
      id: '/register/'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterIndexImport
      parentRoute: typeof rootRoute
    }
    '/settings/': {
      id: '/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsIndexImport
      parentRoute: typeof rootRoute
    }
    '/support/': {
      id: '/support/'
      path: '/support'
      fullPath: '/support'
      preLoaderRoute: typeof SupportIndexImport
      parentRoute: typeof rootRoute
    }
    '/tickets/': {
      id: '/tickets/'
      path: '/tickets'
      fullPath: '/tickets'
      preLoaderRoute: typeof TicketsIndexImport
      parentRoute: typeof rootRoute
    }
    '/explore/$eventId/': {
      id: '/explore/$eventId/'
      path: '/explore/$eventId'
      fullPath: '/explore/$eventId'
      preLoaderRoute: typeof ExploreEventIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/host/dashboard/': {
      id: '/host/dashboard/'
      path: '/host/dashboard'
      fullPath: '/host/dashboard'
      preLoaderRoute: typeof HostDashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/host/join/': {
      id: '/host/join/'
      path: '/host/join'
      fullPath: '/host/join'
      preLoaderRoute: typeof HostJoinIndexImport
      parentRoute: typeof rootRoute
    }
    '/u/$uId/': {
      id: '/u/$uId/'
      path: '/u/$uId'
      fullPath: '/u/$uId'
      preLoaderRoute: typeof UUIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/u/favourites/': {
      id: '/u/favourites/'
      path: '/u/favourites'
      fullPath: '/u/favourites'
      preLoaderRoute: typeof UFavouritesIndexImport
      parentRoute: typeof rootRoute
    }
    '/u/purchases/': {
      id: '/u/purchases/'
      path: '/u/purchases'
      fullPath: '/u/purchases'
      preLoaderRoute: typeof UPurchasesIndexImport
      parentRoute: typeof rootRoute
    }
    '/u/tickets/': {
      id: '/u/tickets/'
      path: '/u/tickets'
      fullPath: '/u/tickets'
      preLoaderRoute: typeof UTicketsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/explore/$category': typeof ExploreCategoryRoute
  '/about': typeof AboutIndexRoute
  '/event': typeof EventIndexRoute
  '/explore': typeof ExploreIndexRoute
  '/help': typeof HelpIndexRoute
  '/login': typeof LoginIndexRoute
  '/register': typeof RegisterIndexRoute
  '/settings': typeof SettingsIndexRoute
  '/support': typeof SupportIndexRoute
  '/tickets': typeof TicketsIndexRoute
  '/explore/$eventId': typeof ExploreEventIdIndexRoute
  '/host/dashboard': typeof HostDashboardIndexRoute
  '/host/join': typeof HostJoinIndexRoute
  '/u/$uId': typeof UUIdIndexRoute
  '/u/favourites': typeof UFavouritesIndexRoute
  '/u/purchases': typeof UPurchasesIndexRoute
  '/u/tickets': typeof UTicketsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/explore/$category': typeof ExploreCategoryRoute
  '/about': typeof AboutIndexRoute
  '/event': typeof EventIndexRoute
  '/explore': typeof ExploreIndexRoute
  '/help': typeof HelpIndexRoute
  '/login': typeof LoginIndexRoute
  '/register': typeof RegisterIndexRoute
  '/settings': typeof SettingsIndexRoute
  '/support': typeof SupportIndexRoute
  '/tickets': typeof TicketsIndexRoute
  '/explore/$eventId': typeof ExploreEventIdIndexRoute
  '/host/dashboard': typeof HostDashboardIndexRoute
  '/host/join': typeof HostJoinIndexRoute
  '/u/$uId': typeof UUIdIndexRoute
  '/u/favourites': typeof UFavouritesIndexRoute
  '/u/purchases': typeof UPurchasesIndexRoute
  '/u/tickets': typeof UTicketsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/explore/$category': typeof ExploreCategoryRoute
  '/about/': typeof AboutIndexRoute
  '/event/': typeof EventIndexRoute
  '/explore/': typeof ExploreIndexRoute
  '/help/': typeof HelpIndexRoute
  '/login/': typeof LoginIndexRoute
  '/register/': typeof RegisterIndexRoute
  '/settings/': typeof SettingsIndexRoute
  '/support/': typeof SupportIndexRoute
  '/tickets/': typeof TicketsIndexRoute
  '/explore/$eventId/': typeof ExploreEventIdIndexRoute
  '/host/dashboard/': typeof HostDashboardIndexRoute
  '/host/join/': typeof HostJoinIndexRoute
  '/u/$uId/': typeof UUIdIndexRoute
  '/u/favourites/': typeof UFavouritesIndexRoute
  '/u/purchases/': typeof UPurchasesIndexRoute
  '/u/tickets/': typeof UTicketsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/explore/$category'
    | '/about'
    | '/event'
    | '/explore'
    | '/help'
    | '/login'
    | '/register'
    | '/settings'
    | '/support'
    | '/tickets'
    | '/explore/$eventId'
    | '/host/dashboard'
    | '/host/join'
    | '/u/$uId'
    | '/u/favourites'
    | '/u/purchases'
    | '/u/tickets'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/explore/$category'
    | '/about'
    | '/event'
    | '/explore'
    | '/help'
    | '/login'
    | '/register'
    | '/settings'
    | '/support'
    | '/tickets'
    | '/explore/$eventId'
    | '/host/dashboard'
    | '/host/join'
    | '/u/$uId'
    | '/u/favourites'
    | '/u/purchases'
    | '/u/tickets'
  id:
    | '__root__'
    | '/'
    | '/explore/$category'
    | '/about/'
    | '/event/'
    | '/explore/'
    | '/help/'
    | '/login/'
    | '/register/'
    | '/settings/'
    | '/support/'
    | '/tickets/'
    | '/explore/$eventId/'
    | '/host/dashboard/'
    | '/host/join/'
    | '/u/$uId/'
    | '/u/favourites/'
    | '/u/purchases/'
    | '/u/tickets/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ExploreCategoryRoute: typeof ExploreCategoryRoute
  AboutIndexRoute: typeof AboutIndexRoute
  EventIndexRoute: typeof EventIndexRoute
  ExploreIndexRoute: typeof ExploreIndexRoute
  HelpIndexRoute: typeof HelpIndexRoute
  LoginIndexRoute: typeof LoginIndexRoute
  RegisterIndexRoute: typeof RegisterIndexRoute
  SettingsIndexRoute: typeof SettingsIndexRoute
  SupportIndexRoute: typeof SupportIndexRoute
  TicketsIndexRoute: typeof TicketsIndexRoute
  ExploreEventIdIndexRoute: typeof ExploreEventIdIndexRoute
  HostDashboardIndexRoute: typeof HostDashboardIndexRoute
  HostJoinIndexRoute: typeof HostJoinIndexRoute
  UUIdIndexRoute: typeof UUIdIndexRoute
  UFavouritesIndexRoute: typeof UFavouritesIndexRoute
  UPurchasesIndexRoute: typeof UPurchasesIndexRoute
  UTicketsIndexRoute: typeof UTicketsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ExploreCategoryRoute: ExploreCategoryRoute,
  AboutIndexRoute: AboutIndexRoute,
  EventIndexRoute: EventIndexRoute,
  ExploreIndexRoute: ExploreIndexRoute,
  HelpIndexRoute: HelpIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  RegisterIndexRoute: RegisterIndexRoute,
  SettingsIndexRoute: SettingsIndexRoute,
  SupportIndexRoute: SupportIndexRoute,
  TicketsIndexRoute: TicketsIndexRoute,
  ExploreEventIdIndexRoute: ExploreEventIdIndexRoute,
  HostDashboardIndexRoute: HostDashboardIndexRoute,
  HostJoinIndexRoute: HostJoinIndexRoute,
  UUIdIndexRoute: UUIdIndexRoute,
  UFavouritesIndexRoute: UFavouritesIndexRoute,
  UPurchasesIndexRoute: UPurchasesIndexRoute,
  UTicketsIndexRoute: UTicketsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/explore/$category",
        "/about/",
        "/event/",
        "/explore/",
        "/help/",
        "/login/",
        "/register/",
        "/settings/",
        "/support/",
        "/tickets/",
        "/explore/$eventId/",
        "/host/dashboard/",
        "/host/join/",
        "/u/$uId/",
        "/u/favourites/",
        "/u/purchases/",
        "/u/tickets/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/explore/$category": {
      "filePath": "explore/$category.tsx"
    },
    "/about/": {
      "filePath": "about/index.tsx"
    },
    "/event/": {
      "filePath": "event/index.tsx"
    },
    "/explore/": {
      "filePath": "explore/index.tsx"
    },
    "/help/": {
      "filePath": "help/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/register/": {
      "filePath": "register/index.tsx"
    },
    "/settings/": {
      "filePath": "settings/index.tsx"
    },
    "/support/": {
      "filePath": "support/index.tsx"
    },
    "/tickets/": {
      "filePath": "tickets/index.tsx"
    },
    "/explore/$eventId/": {
      "filePath": "explore/$eventId/index.tsx"
    },
    "/host/dashboard/": {
      "filePath": "host/dashboard/index.tsx"
    },
    "/host/join/": {
      "filePath": "host/join/index.tsx"
    },
    "/u/$uId/": {
      "filePath": "u/$uId/index.tsx"
    },
    "/u/favourites/": {
      "filePath": "u/favourites/index.tsx"
    },
    "/u/purchases/": {
      "filePath": "u/purchases/index.tsx"
    },
    "/u/tickets/": {
      "filePath": "u/tickets/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */