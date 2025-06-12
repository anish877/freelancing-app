
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model TimeEntry
 * 
 */
export type TimeEntry = $Result.DefaultSelection<Prisma.$TimeEntryPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model NDATemplate
 * 
 */
export type NDATemplate = $Result.DefaultSelection<Prisma.$NDATemplatePayload>
/**
 * Model SearchQuery
 * 
 */
export type SearchQuery = $Result.DefaultSelection<Prisma.$SearchQueryPayload>
/**
 * Model FreelancerApplication
 * 
 */
export type FreelancerApplication = $Result.DefaultSelection<Prisma.$FreelancerApplicationPayload>
/**
 * Model PaymentPlanConfig
 * 
 */
export type PaymentPlanConfig = $Result.DefaultSelection<Prisma.$PaymentPlanConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  CLIENT: 'CLIENT',
  FREELANCER: 'FREELANCER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DeveloperType: {
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  FULLSTACK: 'FULLSTACK',
  OTHER: 'OTHER'
};

export type DeveloperType = (typeof DeveloperType)[keyof typeof DeveloperType]


export const PaymentPlan: {
  PLAN_1: 'PLAN_1',
  PLAN_2: 'PLAN_2',
  PLAN_3: 'PLAN_3'
};

export type PaymentPlan = (typeof PaymentPlan)[keyof typeof PaymentPlan]


export const ProjectStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const MessageType: {
  TEXT: 'TEXT',
  FILE: 'FILE',
  SYSTEM: 'SYSTEM'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DeveloperType = $Enums.DeveloperType

export const DeveloperType: typeof $Enums.DeveloperType

export type PaymentPlan = $Enums.PaymentPlan

export const PaymentPlan: typeof $Enums.PaymentPlan

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeEntry`: Exposes CRUD operations for the **TimeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeEntries
    * const timeEntries = await prisma.timeEntry.findMany()
    * ```
    */
  get timeEntry(): Prisma.TimeEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nDATemplate`: Exposes CRUD operations for the **NDATemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NDATemplates
    * const nDATemplates = await prisma.nDATemplate.findMany()
    * ```
    */
  get nDATemplate(): Prisma.NDATemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchQuery`: Exposes CRUD operations for the **SearchQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchQueries
    * const searchQueries = await prisma.searchQuery.findMany()
    * ```
    */
  get searchQuery(): Prisma.SearchQueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freelancerApplication`: Exposes CRUD operations for the **FreelancerApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FreelancerApplications
    * const freelancerApplications = await prisma.freelancerApplication.findMany()
    * ```
    */
  get freelancerApplication(): Prisma.FreelancerApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentPlanConfig`: Exposes CRUD operations for the **PaymentPlanConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentPlanConfigs
    * const paymentPlanConfigs = await prisma.paymentPlanConfig.findMany()
    * ```
    */
  get paymentPlanConfig(): Prisma.PaymentPlanConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    TimeEntry: 'TimeEntry',
    Message: 'Message',
    Milestone: 'Milestone',
    NDATemplate: 'NDATemplate',
    SearchQuery: 'SearchQuery',
    FreelancerApplication: 'FreelancerApplication',
    PaymentPlanConfig: 'PaymentPlanConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "timeEntry" | "message" | "milestone" | "nDATemplate" | "searchQuery" | "freelancerApplication" | "paymentPlanConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      TimeEntry: {
        payload: Prisma.$TimeEntryPayload<ExtArgs>
        fields: Prisma.TimeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findFirst: {
            args: Prisma.TimeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findMany: {
            args: Prisma.TimeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          create: {
            args: Prisma.TimeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          createMany: {
            args: Prisma.TimeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          delete: {
            args: Prisma.TimeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          update: {
            args: Prisma.TimeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          upsert: {
            args: Prisma.TimeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          aggregate: {
            args: Prisma.TimeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeEntry>
          }
          groupBy: {
            args: Prisma.TimeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      NDATemplate: {
        payload: Prisma.$NDATemplatePayload<ExtArgs>
        fields: Prisma.NDATemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NDATemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NDATemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>
          }
          findFirst: {
            args: Prisma.NDATemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NDATemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>
          }
          findMany: {
            args: Prisma.NDATemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>[]
          }
          create: {
            args: Prisma.NDATemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>
          }
          createMany: {
            args: Prisma.NDATemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NDATemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>[]
          }
          delete: {
            args: Prisma.NDATemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>
          }
          update: {
            args: Prisma.NDATemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>
          }
          deleteMany: {
            args: Prisma.NDATemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NDATemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NDATemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>[]
          }
          upsert: {
            args: Prisma.NDATemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDATemplatePayload>
          }
          aggregate: {
            args: Prisma.NDATemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNDATemplate>
          }
          groupBy: {
            args: Prisma.NDATemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NDATemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NDATemplateCountArgs<ExtArgs>
            result: $Utils.Optional<NDATemplateCountAggregateOutputType> | number
          }
        }
      }
      SearchQuery: {
        payload: Prisma.$SearchQueryPayload<ExtArgs>
        fields: Prisma.SearchQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          findFirst: {
            args: Prisma.SearchQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          findMany: {
            args: Prisma.SearchQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          create: {
            args: Prisma.SearchQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          createMany: {
            args: Prisma.SearchQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          delete: {
            args: Prisma.SearchQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          update: {
            args: Prisma.SearchQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          deleteMany: {
            args: Prisma.SearchQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          upsert: {
            args: Prisma.SearchQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          aggregate: {
            args: Prisma.SearchQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchQuery>
          }
          groupBy: {
            args: Prisma.SearchQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchQueryCountArgs<ExtArgs>
            result: $Utils.Optional<SearchQueryCountAggregateOutputType> | number
          }
        }
      }
      FreelancerApplication: {
        payload: Prisma.$FreelancerApplicationPayload<ExtArgs>
        fields: Prisma.FreelancerApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FreelancerApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FreelancerApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>
          }
          findFirst: {
            args: Prisma.FreelancerApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FreelancerApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>
          }
          findMany: {
            args: Prisma.FreelancerApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>[]
          }
          create: {
            args: Prisma.FreelancerApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>
          }
          createMany: {
            args: Prisma.FreelancerApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FreelancerApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>[]
          }
          delete: {
            args: Prisma.FreelancerApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>
          }
          update: {
            args: Prisma.FreelancerApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>
          }
          deleteMany: {
            args: Prisma.FreelancerApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FreelancerApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FreelancerApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>[]
          }
          upsert: {
            args: Prisma.FreelancerApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreelancerApplicationPayload>
          }
          aggregate: {
            args: Prisma.FreelancerApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreelancerApplication>
          }
          groupBy: {
            args: Prisma.FreelancerApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreelancerApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FreelancerApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<FreelancerApplicationCountAggregateOutputType> | number
          }
        }
      }
      PaymentPlanConfig: {
        payload: Prisma.$PaymentPlanConfigPayload<ExtArgs>
        fields: Prisma.PaymentPlanConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPlanConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPlanConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>
          }
          findFirst: {
            args: Prisma.PaymentPlanConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPlanConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>
          }
          findMany: {
            args: Prisma.PaymentPlanConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>[]
          }
          create: {
            args: Prisma.PaymentPlanConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>
          }
          createMany: {
            args: Prisma.PaymentPlanConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentPlanConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>[]
          }
          delete: {
            args: Prisma.PaymentPlanConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>
          }
          update: {
            args: Prisma.PaymentPlanConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>
          }
          deleteMany: {
            args: Prisma.PaymentPlanConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPlanConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentPlanConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>[]
          }
          upsert: {
            args: Prisma.PaymentPlanConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanConfigPayload>
          }
          aggregate: {
            args: Prisma.PaymentPlanConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPlanConfig>
          }
          groupBy: {
            args: Prisma.PaymentPlanConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPlanConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPlanConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPlanConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    timeEntry?: TimeEntryOmit
    message?: MessageOmit
    milestone?: MilestoneOmit
    nDATemplate?: NDATemplateOmit
    searchQuery?: SearchQueryOmit
    freelancerApplication?: FreelancerApplicationOmit
    paymentPlanConfig?: PaymentPlanConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clientProjects: number
    freelancerProjects: number
    timeEntries: number
    messages: number
    ndaTemplates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientProjects?: boolean | UserCountOutputTypeCountClientProjectsArgs
    freelancerProjects?: boolean | UserCountOutputTypeCountFreelancerProjectsArgs
    timeEntries?: boolean | UserCountOutputTypeCountTimeEntriesArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    ndaTemplates?: boolean | UserCountOutputTypeCountNdaTemplatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFreelancerProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNdaTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NDATemplateWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    timeEntries: number
    messages: number
    milestones: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeEntries?: boolean | ProjectCountOutputTypeCountTimeEntriesArgs
    messages?: boolean | ProjectCountOutputTypeCountMessagesArgs
    milestones?: boolean | ProjectCountOutputTypeCountMilestonesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTimeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    hourlyRate: number | null
  }

  export type UserSumAggregateOutputType = {
    hourlyRate: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    companyName: string | null
    stripeCustomerId: string | null
    bio: string | null
    developerType: $Enums.DeveloperType | null
    isVetted: boolean | null
    hourlyRate: number | null
    portfolioUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    companyName: string | null
    stripeCustomerId: string | null
    bio: string | null
    developerType: $Enums.DeveloperType | null
    isVetted: boolean | null
    hourlyRate: number | null
    portfolioUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    avatar: number
    role: number
    createdAt: number
    updatedAt: number
    companyName: number
    stripeCustomerId: number
    bio: number
    developerType: number
    isVetted: number
    hourlyRate: number
    portfolioUrl: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    hourlyRate?: true
  }

  export type UserSumAggregateInputType = {
    hourlyRate?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    stripeCustomerId?: true
    bio?: true
    developerType?: true
    isVetted?: true
    hourlyRate?: true
    portfolioUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    stripeCustomerId?: true
    bio?: true
    developerType?: true
    isVetted?: true
    hourlyRate?: true
    portfolioUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    companyName?: true
    stripeCustomerId?: true
    bio?: true
    developerType?: true
    isVetted?: true
    hourlyRate?: true
    portfolioUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    avatar: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    companyName: string | null
    stripeCustomerId: string | null
    bio: string | null
    developerType: $Enums.DeveloperType | null
    isVetted: boolean
    hourlyRate: number | null
    portfolioUrl: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    stripeCustomerId?: boolean
    bio?: boolean
    developerType?: boolean
    isVetted?: boolean
    hourlyRate?: boolean
    portfolioUrl?: boolean
    clientProjects?: boolean | User$clientProjectsArgs<ExtArgs>
    freelancerProjects?: boolean | User$freelancerProjectsArgs<ExtArgs>
    timeEntries?: boolean | User$timeEntriesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    ndaTemplates?: boolean | User$ndaTemplatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    stripeCustomerId?: boolean
    bio?: boolean
    developerType?: boolean
    isVetted?: boolean
    hourlyRate?: boolean
    portfolioUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    stripeCustomerId?: boolean
    bio?: boolean
    developerType?: boolean
    isVetted?: boolean
    hourlyRate?: boolean
    portfolioUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyName?: boolean
    stripeCustomerId?: boolean
    bio?: boolean
    developerType?: boolean
    isVetted?: boolean
    hourlyRate?: boolean
    portfolioUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "avatar" | "role" | "createdAt" | "updatedAt" | "companyName" | "stripeCustomerId" | "bio" | "developerType" | "isVetted" | "hourlyRate" | "portfolioUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientProjects?: boolean | User$clientProjectsArgs<ExtArgs>
    freelancerProjects?: boolean | User$freelancerProjectsArgs<ExtArgs>
    timeEntries?: boolean | User$timeEntriesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    ndaTemplates?: boolean | User$ndaTemplatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clientProjects: Prisma.$ProjectPayload<ExtArgs>[]
      freelancerProjects: Prisma.$ProjectPayload<ExtArgs>[]
      timeEntries: Prisma.$TimeEntryPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      ndaTemplates: Prisma.$NDATemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      avatar: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      companyName: string | null
      stripeCustomerId: string | null
      bio: string | null
      developerType: $Enums.DeveloperType | null
      isVetted: boolean
      hourlyRate: number | null
      portfolioUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientProjects<T extends User$clientProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    freelancerProjects<T extends User$freelancerProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$freelancerProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeEntries<T extends User$timeEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$timeEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ndaTemplates<T extends User$ndaTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$ndaTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly developerType: FieldRef<"User", 'DeveloperType'>
    readonly isVetted: FieldRef<"User", 'Boolean'>
    readonly hourlyRate: FieldRef<"User", 'Float'>
    readonly portfolioUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clientProjects
   */
  export type User$clientProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.freelancerProjects
   */
  export type User$freelancerProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.timeEntries
   */
  export type User$timeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    cursor?: TimeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.ndaTemplates
   */
  export type User$ndaTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    where?: NDATemplateWhereInput
    orderBy?: NDATemplateOrderByWithRelationInput | NDATemplateOrderByWithRelationInput[]
    cursor?: NDATemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NDATemplateScalarFieldEnum | NDATemplateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    equityPercentage: number | null
    totalBudget: number | null
  }

  export type ProjectSumAggregateOutputType = {
    equityPercentage: number | null
    totalBudget: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    paymentPlan: $Enums.PaymentPlan | null
    equityPercentage: number | null
    totalBudget: number | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
    freelancerId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    paymentPlan: $Enums.PaymentPlan | null
    equityPercentage: number | null
    totalBudget: number | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
    freelancerId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    paymentPlan: number
    equityPercentage: number
    totalBudget: number
    createdAt: number
    updatedAt: number
    clientId: number
    freelancerId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    equityPercentage?: true
    totalBudget?: true
  }

  export type ProjectSumAggregateInputType = {
    equityPercentage?: true
    totalBudget?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    paymentPlan?: true
    equityPercentage?: true
    totalBudget?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    freelancerId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    paymentPlan?: true
    equityPercentage?: true
    totalBudget?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    freelancerId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    paymentPlan?: true
    equityPercentage?: true
    totalBudget?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    freelancerId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage: number | null
    totalBudget: number | null
    createdAt: Date
    updatedAt: Date
    clientId: string
    freelancerId: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    paymentPlan?: boolean
    equityPercentage?: boolean
    totalBudget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    freelancerId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    freelancer?: boolean | Project$freelancerArgs<ExtArgs>
    timeEntries?: boolean | Project$timeEntriesArgs<ExtArgs>
    messages?: boolean | Project$messagesArgs<ExtArgs>
    milestones?: boolean | Project$milestonesArgs<ExtArgs>
    ndaTemplate?: boolean | Project$ndaTemplateArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    paymentPlan?: boolean
    equityPercentage?: boolean
    totalBudget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    freelancerId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    freelancer?: boolean | Project$freelancerArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    paymentPlan?: boolean
    equityPercentage?: boolean
    totalBudget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    freelancerId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    freelancer?: boolean | Project$freelancerArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    paymentPlan?: boolean
    equityPercentage?: boolean
    totalBudget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    freelancerId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "paymentPlan" | "equityPercentage" | "totalBudget" | "createdAt" | "updatedAt" | "clientId" | "freelancerId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    freelancer?: boolean | Project$freelancerArgs<ExtArgs>
    timeEntries?: boolean | Project$timeEntriesArgs<ExtArgs>
    messages?: boolean | Project$messagesArgs<ExtArgs>
    milestones?: boolean | Project$milestonesArgs<ExtArgs>
    ndaTemplate?: boolean | Project$ndaTemplateArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    freelancer?: boolean | Project$freelancerArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    freelancer?: boolean | Project$freelancerArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      freelancer: Prisma.$UserPayload<ExtArgs> | null
      timeEntries: Prisma.$TimeEntryPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
      ndaTemplate: Prisma.$NDATemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.ProjectStatus
      paymentPlan: $Enums.PaymentPlan
      equityPercentage: number | null
      totalBudget: number | null
      createdAt: Date
      updatedAt: Date
      clientId: string
      freelancerId: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    freelancer<T extends Project$freelancerArgs<ExtArgs> = {}>(args?: Subset<T, Project$freelancerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    timeEntries<T extends Project$timeEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Project$timeEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Project$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    milestones<T extends Project$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Project$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ndaTemplate<T extends Project$ndaTemplateArgs<ExtArgs> = {}>(args?: Subset<T, Project$ndaTemplateArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly paymentPlan: FieldRef<"Project", 'PaymentPlan'>
    readonly equityPercentage: FieldRef<"Project", 'Float'>
    readonly totalBudget: FieldRef<"Project", 'Float'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly clientId: FieldRef<"Project", 'String'>
    readonly freelancerId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.freelancer
   */
  export type Project$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Project.timeEntries
   */
  export type Project$timeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    cursor?: TimeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * Project.messages
   */
  export type Project$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Project.milestones
   */
  export type Project$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Project.ndaTemplate
   */
  export type Project$ndaTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    where?: NDATemplateWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model TimeEntry
   */

  export type AggregateTimeEntry = {
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  export type TimeEntryAvgAggregateOutputType = {
    hoursWorked: number | null
    hourlyRate: number | null
    totalAmount: number | null
  }

  export type TimeEntrySumAggregateOutputType = {
    hoursWorked: number | null
    hourlyRate: number | null
    totalAmount: number | null
  }

  export type TimeEntryMinAggregateOutputType = {
    id: string | null
    description: string | null
    hoursWorked: number | null
    hourlyRate: number | null
    totalAmount: number | null
    date: Date | null
    createdAt: Date | null
    projectId: string | null
    freelancerId: string | null
  }

  export type TimeEntryMaxAggregateOutputType = {
    id: string | null
    description: string | null
    hoursWorked: number | null
    hourlyRate: number | null
    totalAmount: number | null
    date: Date | null
    createdAt: Date | null
    projectId: string | null
    freelancerId: string | null
  }

  export type TimeEntryCountAggregateOutputType = {
    id: number
    description: number
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date: number
    createdAt: number
    projectId: number
    freelancerId: number
    _all: number
  }


  export type TimeEntryAvgAggregateInputType = {
    hoursWorked?: true
    hourlyRate?: true
    totalAmount?: true
  }

  export type TimeEntrySumAggregateInputType = {
    hoursWorked?: true
    hourlyRate?: true
    totalAmount?: true
  }

  export type TimeEntryMinAggregateInputType = {
    id?: true
    description?: true
    hoursWorked?: true
    hourlyRate?: true
    totalAmount?: true
    date?: true
    createdAt?: true
    projectId?: true
    freelancerId?: true
  }

  export type TimeEntryMaxAggregateInputType = {
    id?: true
    description?: true
    hoursWorked?: true
    hourlyRate?: true
    totalAmount?: true
    date?: true
    createdAt?: true
    projectId?: true
    freelancerId?: true
  }

  export type TimeEntryCountAggregateInputType = {
    id?: true
    description?: true
    hoursWorked?: true
    hourlyRate?: true
    totalAmount?: true
    date?: true
    createdAt?: true
    projectId?: true
    freelancerId?: true
    _all?: true
  }

  export type TimeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntry to aggregate.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeEntries
    **/
    _count?: true | TimeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeEntryMaxAggregateInputType
  }

  export type GetTimeEntryAggregateType<T extends TimeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeEntry[P]>
      : GetScalarType<T[P], AggregateTimeEntry[P]>
  }




  export type TimeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithAggregationInput | TimeEntryOrderByWithAggregationInput[]
    by: TimeEntryScalarFieldEnum[] | TimeEntryScalarFieldEnum
    having?: TimeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeEntryCountAggregateInputType | true
    _avg?: TimeEntryAvgAggregateInputType
    _sum?: TimeEntrySumAggregateInputType
    _min?: TimeEntryMinAggregateInputType
    _max?: TimeEntryMaxAggregateInputType
  }

  export type TimeEntryGroupByOutputType = {
    id: string
    description: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date: Date
    createdAt: Date
    projectId: string
    freelancerId: string
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  type GetTimeEntryGroupByPayload<T extends TimeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    hoursWorked?: boolean
    hourlyRate?: boolean
    totalAmount?: boolean
    date?: boolean
    createdAt?: boolean
    projectId?: boolean
    freelancerId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    hoursWorked?: boolean
    hourlyRate?: boolean
    totalAmount?: boolean
    date?: boolean
    createdAt?: boolean
    projectId?: boolean
    freelancerId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    hoursWorked?: boolean
    hourlyRate?: boolean
    totalAmount?: boolean
    date?: boolean
    createdAt?: boolean
    projectId?: boolean
    freelancerId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectScalar = {
    id?: boolean
    description?: boolean
    hoursWorked?: boolean
    hourlyRate?: boolean
    totalAmount?: boolean
    date?: boolean
    createdAt?: boolean
    projectId?: boolean
    freelancerId?: boolean
  }

  export type TimeEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "hoursWorked" | "hourlyRate" | "totalAmount" | "date" | "createdAt" | "projectId" | "freelancerId", ExtArgs["result"]["timeEntry"]>
  export type TimeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    freelancer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeEntry"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      freelancer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      hoursWorked: number
      hourlyRate: number
      totalAmount: number
      date: Date
      createdAt: Date
      projectId: string
      freelancerId: string
    }, ExtArgs["result"]["timeEntry"]>
    composites: {}
  }

  type TimeEntryGetPayload<S extends boolean | null | undefined | TimeEntryDefaultArgs> = $Result.GetResult<Prisma.$TimeEntryPayload, S>

  type TimeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeEntryCountAggregateInputType | true
    }

  export interface TimeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeEntry'], meta: { name: 'TimeEntry' } }
    /**
     * Find zero or one TimeEntry that matches the filter.
     * @param {TimeEntryFindUniqueArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeEntryFindUniqueArgs>(args: SelectSubset<T, TimeEntryFindUniqueArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeEntryFindUniqueOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeEntryFindFirstArgs>(args?: SelectSubset<T, TimeEntryFindFirstArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany()
     * 
     * // Get first 10 TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeEntryFindManyArgs>(args?: SelectSubset<T, TimeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeEntry.
     * @param {TimeEntryCreateArgs} args - Arguments to create a TimeEntry.
     * @example
     * // Create one TimeEntry
     * const TimeEntry = await prisma.timeEntry.create({
     *   data: {
     *     // ... data to create a TimeEntry
     *   }
     * })
     * 
     */
    create<T extends TimeEntryCreateArgs>(args: SelectSubset<T, TimeEntryCreateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeEntries.
     * @param {TimeEntryCreateManyArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeEntryCreateManyArgs>(args?: SelectSubset<T, TimeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeEntries and returns the data saved in the database.
     * @param {TimeEntryCreateManyAndReturnArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeEntries and only return the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeEntry.
     * @param {TimeEntryDeleteArgs} args - Arguments to delete one TimeEntry.
     * @example
     * // Delete one TimeEntry
     * const TimeEntry = await prisma.timeEntry.delete({
     *   where: {
     *     // ... filter to delete one TimeEntry
     *   }
     * })
     * 
     */
    delete<T extends TimeEntryDeleteArgs>(args: SelectSubset<T, TimeEntryDeleteArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeEntry.
     * @param {TimeEntryUpdateArgs} args - Arguments to update one TimeEntry.
     * @example
     * // Update one TimeEntry
     * const timeEntry = await prisma.timeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeEntryUpdateArgs>(args: SelectSubset<T, TimeEntryUpdateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeEntries.
     * @param {TimeEntryDeleteManyArgs} args - Arguments to filter TimeEntries to delete.
     * @example
     * // Delete a few TimeEntries
     * const { count } = await prisma.timeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeEntryDeleteManyArgs>(args?: SelectSubset<T, TimeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeEntries
     * const timeEntry = await prisma.timeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeEntryUpdateManyArgs>(args: SelectSubset<T, TimeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeEntries and returns the data updated in the database.
     * @param {TimeEntryUpdateManyAndReturnArgs} args - Arguments to update many TimeEntries.
     * @example
     * // Update many TimeEntries
     * const timeEntry = await prisma.timeEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeEntries and only return the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeEntry.
     * @param {TimeEntryUpsertArgs} args - Arguments to update or create a TimeEntry.
     * @example
     * // Update or create a TimeEntry
     * const timeEntry = await prisma.timeEntry.upsert({
     *   create: {
     *     // ... data to create a TimeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimeEntryUpsertArgs>(args: SelectSubset<T, TimeEntryUpsertArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryCountArgs} args - Arguments to filter TimeEntries to count.
     * @example
     * // Count the number of TimeEntries
     * const count = await prisma.timeEntry.count({
     *   where: {
     *     // ... the filter for the TimeEntries we want to count
     *   }
     * })
    **/
    count<T extends TimeEntryCountArgs>(
      args?: Subset<T, TimeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeEntryAggregateArgs>(args: Subset<T, TimeEntryAggregateArgs>): Prisma.PrismaPromise<GetTimeEntryAggregateType<T>>

    /**
     * Group by TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimeEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeEntry model
   */
  readonly fields: TimeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    freelancer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeEntry model
   */
  interface TimeEntryFieldRefs {
    readonly id: FieldRef<"TimeEntry", 'String'>
    readonly description: FieldRef<"TimeEntry", 'String'>
    readonly hoursWorked: FieldRef<"TimeEntry", 'Float'>
    readonly hourlyRate: FieldRef<"TimeEntry", 'Float'>
    readonly totalAmount: FieldRef<"TimeEntry", 'Float'>
    readonly date: FieldRef<"TimeEntry", 'DateTime'>
    readonly createdAt: FieldRef<"TimeEntry", 'DateTime'>
    readonly projectId: FieldRef<"TimeEntry", 'String'>
    readonly freelancerId: FieldRef<"TimeEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeEntry findUnique
   */
  export type TimeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findUniqueOrThrow
   */
  export type TimeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findFirst
   */
  export type TimeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findFirstOrThrow
   */
  export type TimeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findMany
   */
  export type TimeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntries to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry create
   */
  export type TimeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeEntry.
     */
    data: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
  }

  /**
   * TimeEntry createMany
   */
  export type TimeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeEntry createManyAndReturn
   */
  export type TimeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeEntry update
   */
  export type TimeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeEntry.
     */
    data: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
    /**
     * Choose, which TimeEntry to update.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry updateMany
   */
  export type TimeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeEntries.
     */
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimeEntries to update
     */
    where?: TimeEntryWhereInput
    /**
     * Limit how many TimeEntries to update.
     */
    limit?: number
  }

  /**
   * TimeEntry updateManyAndReturn
   */
  export type TimeEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * The data used to update TimeEntries.
     */
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimeEntries to update
     */
    where?: TimeEntryWhereInput
    /**
     * Limit how many TimeEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeEntry upsert
   */
  export type TimeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeEntry to update in case it exists.
     */
    where: TimeEntryWhereUniqueInput
    /**
     * In case the TimeEntry found by the `where` argument doesn't exist, create a new TimeEntry with this data.
     */
    create: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
    /**
     * In case the TimeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
  }

  /**
   * TimeEntry delete
   */
  export type TimeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter which TimeEntry to delete.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry deleteMany
   */
  export type TimeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntries to delete
     */
    where?: TimeEntryWhereInput
    /**
     * Limit how many TimeEntries to delete.
     */
    limit?: number
  }

  /**
   * TimeEntry without action
   */
  export type TimeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    fileUrl: string | null
    createdAt: Date | null
    projectId: string | null
    senderId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    fileUrl: string | null
    createdAt: Date | null
    projectId: string | null
    senderId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    type: number
    fileUrl: number
    createdAt: number
    projectId: number
    senderId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    fileUrl?: true
    createdAt?: true
    projectId?: true
    senderId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    fileUrl?: true
    createdAt?: true
    projectId?: true
    senderId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    fileUrl?: true
    createdAt?: true
    projectId?: true
    senderId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    type: $Enums.MessageType
    fileUrl: string | null
    createdAt: Date
    projectId: string
    senderId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    projectId?: boolean
    senderId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    projectId?: boolean
    senderId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    projectId?: boolean
    senderId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    projectId?: boolean
    senderId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "fileUrl" | "createdAt" | "projectId" | "senderId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      type: $Enums.MessageType
      fileUrl: string | null
      createdAt: Date
      projectId: string
      senderId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly fileUrl: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly projectId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isCompleted: boolean | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isCompleted: boolean | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isCompleted: number
    dueDate: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type MilestoneMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isCompleted?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isCompleted?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isCompleted?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    title: string
    description: string | null
    isCompleted: boolean
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isCompleted" | "dueDate" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      isCompleted: boolean
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly isCompleted: FieldRef<"Milestone", 'Boolean'>
    readonly dueDate: FieldRef<"Milestone", 'DateTime'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly updatedAt: FieldRef<"Milestone", 'DateTime'>
    readonly projectId: FieldRef<"Milestone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model NDATemplate
   */

  export type AggregateNDATemplate = {
    _count: NDATemplateCountAggregateOutputType | null
    _min: NDATemplateMinAggregateOutputType | null
    _max: NDATemplateMaxAggregateOutputType | null
  }

  export type NDATemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
    projectId: string | null
  }

  export type NDATemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
    projectId: string | null
  }

  export type NDATemplateCountAggregateOutputType = {
    id: number
    title: number
    content: number
    isActive: number
    createdAt: number
    updatedAt: number
    clientId: number
    projectId: number
    _all: number
  }


  export type NDATemplateMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    projectId?: true
  }

  export type NDATemplateMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    projectId?: true
  }

  export type NDATemplateCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    projectId?: true
    _all?: true
  }

  export type NDATemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NDATemplate to aggregate.
     */
    where?: NDATemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDATemplates to fetch.
     */
    orderBy?: NDATemplateOrderByWithRelationInput | NDATemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NDATemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDATemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDATemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NDATemplates
    **/
    _count?: true | NDATemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NDATemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NDATemplateMaxAggregateInputType
  }

  export type GetNDATemplateAggregateType<T extends NDATemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateNDATemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNDATemplate[P]>
      : GetScalarType<T[P], AggregateNDATemplate[P]>
  }




  export type NDATemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NDATemplateWhereInput
    orderBy?: NDATemplateOrderByWithAggregationInput | NDATemplateOrderByWithAggregationInput[]
    by: NDATemplateScalarFieldEnum[] | NDATemplateScalarFieldEnum
    having?: NDATemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NDATemplateCountAggregateInputType | true
    _min?: NDATemplateMinAggregateInputType
    _max?: NDATemplateMaxAggregateInputType
  }

  export type NDATemplateGroupByOutputType = {
    id: string
    title: string
    content: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    clientId: string
    projectId: string | null
    _count: NDATemplateCountAggregateOutputType | null
    _min: NDATemplateMinAggregateOutputType | null
    _max: NDATemplateMaxAggregateOutputType | null
  }

  type GetNDATemplateGroupByPayload<T extends NDATemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NDATemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NDATemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NDATemplateGroupByOutputType[P]>
            : GetScalarType<T[P], NDATemplateGroupByOutputType[P]>
        }
      >
    >


  export type NDATemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    projectId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | NDATemplate$projectArgs<ExtArgs>
  }, ExtArgs["result"]["nDATemplate"]>

  export type NDATemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    projectId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | NDATemplate$projectArgs<ExtArgs>
  }, ExtArgs["result"]["nDATemplate"]>

  export type NDATemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    projectId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | NDATemplate$projectArgs<ExtArgs>
  }, ExtArgs["result"]["nDATemplate"]>

  export type NDATemplateSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    projectId?: boolean
  }

  export type NDATemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "isActive" | "createdAt" | "updatedAt" | "clientId" | "projectId", ExtArgs["result"]["nDATemplate"]>
  export type NDATemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | NDATemplate$projectArgs<ExtArgs>
  }
  export type NDATemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | NDATemplate$projectArgs<ExtArgs>
  }
  export type NDATemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | NDATemplate$projectArgs<ExtArgs>
  }

  export type $NDATemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NDATemplate"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      clientId: string
      projectId: string | null
    }, ExtArgs["result"]["nDATemplate"]>
    composites: {}
  }

  type NDATemplateGetPayload<S extends boolean | null | undefined | NDATemplateDefaultArgs> = $Result.GetResult<Prisma.$NDATemplatePayload, S>

  type NDATemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NDATemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NDATemplateCountAggregateInputType | true
    }

  export interface NDATemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NDATemplate'], meta: { name: 'NDATemplate' } }
    /**
     * Find zero or one NDATemplate that matches the filter.
     * @param {NDATemplateFindUniqueArgs} args - Arguments to find a NDATemplate
     * @example
     * // Get one NDATemplate
     * const nDATemplate = await prisma.nDATemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NDATemplateFindUniqueArgs>(args: SelectSubset<T, NDATemplateFindUniqueArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NDATemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NDATemplateFindUniqueOrThrowArgs} args - Arguments to find a NDATemplate
     * @example
     * // Get one NDATemplate
     * const nDATemplate = await prisma.nDATemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NDATemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, NDATemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NDATemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDATemplateFindFirstArgs} args - Arguments to find a NDATemplate
     * @example
     * // Get one NDATemplate
     * const nDATemplate = await prisma.nDATemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NDATemplateFindFirstArgs>(args?: SelectSubset<T, NDATemplateFindFirstArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NDATemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDATemplateFindFirstOrThrowArgs} args - Arguments to find a NDATemplate
     * @example
     * // Get one NDATemplate
     * const nDATemplate = await prisma.nDATemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NDATemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, NDATemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NDATemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDATemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NDATemplates
     * const nDATemplates = await prisma.nDATemplate.findMany()
     * 
     * // Get first 10 NDATemplates
     * const nDATemplates = await prisma.nDATemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nDATemplateWithIdOnly = await prisma.nDATemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NDATemplateFindManyArgs>(args?: SelectSubset<T, NDATemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NDATemplate.
     * @param {NDATemplateCreateArgs} args - Arguments to create a NDATemplate.
     * @example
     * // Create one NDATemplate
     * const NDATemplate = await prisma.nDATemplate.create({
     *   data: {
     *     // ... data to create a NDATemplate
     *   }
     * })
     * 
     */
    create<T extends NDATemplateCreateArgs>(args: SelectSubset<T, NDATemplateCreateArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NDATemplates.
     * @param {NDATemplateCreateManyArgs} args - Arguments to create many NDATemplates.
     * @example
     * // Create many NDATemplates
     * const nDATemplate = await prisma.nDATemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NDATemplateCreateManyArgs>(args?: SelectSubset<T, NDATemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NDATemplates and returns the data saved in the database.
     * @param {NDATemplateCreateManyAndReturnArgs} args - Arguments to create many NDATemplates.
     * @example
     * // Create many NDATemplates
     * const nDATemplate = await prisma.nDATemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NDATemplates and only return the `id`
     * const nDATemplateWithIdOnly = await prisma.nDATemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NDATemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, NDATemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NDATemplate.
     * @param {NDATemplateDeleteArgs} args - Arguments to delete one NDATemplate.
     * @example
     * // Delete one NDATemplate
     * const NDATemplate = await prisma.nDATemplate.delete({
     *   where: {
     *     // ... filter to delete one NDATemplate
     *   }
     * })
     * 
     */
    delete<T extends NDATemplateDeleteArgs>(args: SelectSubset<T, NDATemplateDeleteArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NDATemplate.
     * @param {NDATemplateUpdateArgs} args - Arguments to update one NDATemplate.
     * @example
     * // Update one NDATemplate
     * const nDATemplate = await prisma.nDATemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NDATemplateUpdateArgs>(args: SelectSubset<T, NDATemplateUpdateArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NDATemplates.
     * @param {NDATemplateDeleteManyArgs} args - Arguments to filter NDATemplates to delete.
     * @example
     * // Delete a few NDATemplates
     * const { count } = await prisma.nDATemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NDATemplateDeleteManyArgs>(args?: SelectSubset<T, NDATemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NDATemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDATemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NDATemplates
     * const nDATemplate = await prisma.nDATemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NDATemplateUpdateManyArgs>(args: SelectSubset<T, NDATemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NDATemplates and returns the data updated in the database.
     * @param {NDATemplateUpdateManyAndReturnArgs} args - Arguments to update many NDATemplates.
     * @example
     * // Update many NDATemplates
     * const nDATemplate = await prisma.nDATemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NDATemplates and only return the `id`
     * const nDATemplateWithIdOnly = await prisma.nDATemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NDATemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, NDATemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NDATemplate.
     * @param {NDATemplateUpsertArgs} args - Arguments to update or create a NDATemplate.
     * @example
     * // Update or create a NDATemplate
     * const nDATemplate = await prisma.nDATemplate.upsert({
     *   create: {
     *     // ... data to create a NDATemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NDATemplate we want to update
     *   }
     * })
     */
    upsert<T extends NDATemplateUpsertArgs>(args: SelectSubset<T, NDATemplateUpsertArgs<ExtArgs>>): Prisma__NDATemplateClient<$Result.GetResult<Prisma.$NDATemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NDATemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDATemplateCountArgs} args - Arguments to filter NDATemplates to count.
     * @example
     * // Count the number of NDATemplates
     * const count = await prisma.nDATemplate.count({
     *   where: {
     *     // ... the filter for the NDATemplates we want to count
     *   }
     * })
    **/
    count<T extends NDATemplateCountArgs>(
      args?: Subset<T, NDATemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NDATemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NDATemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDATemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NDATemplateAggregateArgs>(args: Subset<T, NDATemplateAggregateArgs>): Prisma.PrismaPromise<GetNDATemplateAggregateType<T>>

    /**
     * Group by NDATemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDATemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NDATemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NDATemplateGroupByArgs['orderBy'] }
        : { orderBy?: NDATemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NDATemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNDATemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NDATemplate model
   */
  readonly fields: NDATemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NDATemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NDATemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends NDATemplate$projectArgs<ExtArgs> = {}>(args?: Subset<T, NDATemplate$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NDATemplate model
   */
  interface NDATemplateFieldRefs {
    readonly id: FieldRef<"NDATemplate", 'String'>
    readonly title: FieldRef<"NDATemplate", 'String'>
    readonly content: FieldRef<"NDATemplate", 'String'>
    readonly isActive: FieldRef<"NDATemplate", 'Boolean'>
    readonly createdAt: FieldRef<"NDATemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"NDATemplate", 'DateTime'>
    readonly clientId: FieldRef<"NDATemplate", 'String'>
    readonly projectId: FieldRef<"NDATemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NDATemplate findUnique
   */
  export type NDATemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * Filter, which NDATemplate to fetch.
     */
    where: NDATemplateWhereUniqueInput
  }

  /**
   * NDATemplate findUniqueOrThrow
   */
  export type NDATemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * Filter, which NDATemplate to fetch.
     */
    where: NDATemplateWhereUniqueInput
  }

  /**
   * NDATemplate findFirst
   */
  export type NDATemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * Filter, which NDATemplate to fetch.
     */
    where?: NDATemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDATemplates to fetch.
     */
    orderBy?: NDATemplateOrderByWithRelationInput | NDATemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NDATemplates.
     */
    cursor?: NDATemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDATemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDATemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NDATemplates.
     */
    distinct?: NDATemplateScalarFieldEnum | NDATemplateScalarFieldEnum[]
  }

  /**
   * NDATemplate findFirstOrThrow
   */
  export type NDATemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * Filter, which NDATemplate to fetch.
     */
    where?: NDATemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDATemplates to fetch.
     */
    orderBy?: NDATemplateOrderByWithRelationInput | NDATemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NDATemplates.
     */
    cursor?: NDATemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDATemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDATemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NDATemplates.
     */
    distinct?: NDATemplateScalarFieldEnum | NDATemplateScalarFieldEnum[]
  }

  /**
   * NDATemplate findMany
   */
  export type NDATemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * Filter, which NDATemplates to fetch.
     */
    where?: NDATemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDATemplates to fetch.
     */
    orderBy?: NDATemplateOrderByWithRelationInput | NDATemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NDATemplates.
     */
    cursor?: NDATemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDATemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDATemplates.
     */
    skip?: number
    distinct?: NDATemplateScalarFieldEnum | NDATemplateScalarFieldEnum[]
  }

  /**
   * NDATemplate create
   */
  export type NDATemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a NDATemplate.
     */
    data: XOR<NDATemplateCreateInput, NDATemplateUncheckedCreateInput>
  }

  /**
   * NDATemplate createMany
   */
  export type NDATemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NDATemplates.
     */
    data: NDATemplateCreateManyInput | NDATemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NDATemplate createManyAndReturn
   */
  export type NDATemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * The data used to create many NDATemplates.
     */
    data: NDATemplateCreateManyInput | NDATemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NDATemplate update
   */
  export type NDATemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a NDATemplate.
     */
    data: XOR<NDATemplateUpdateInput, NDATemplateUncheckedUpdateInput>
    /**
     * Choose, which NDATemplate to update.
     */
    where: NDATemplateWhereUniqueInput
  }

  /**
   * NDATemplate updateMany
   */
  export type NDATemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NDATemplates.
     */
    data: XOR<NDATemplateUpdateManyMutationInput, NDATemplateUncheckedUpdateManyInput>
    /**
     * Filter which NDATemplates to update
     */
    where?: NDATemplateWhereInput
    /**
     * Limit how many NDATemplates to update.
     */
    limit?: number
  }

  /**
   * NDATemplate updateManyAndReturn
   */
  export type NDATemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * The data used to update NDATemplates.
     */
    data: XOR<NDATemplateUpdateManyMutationInput, NDATemplateUncheckedUpdateManyInput>
    /**
     * Filter which NDATemplates to update
     */
    where?: NDATemplateWhereInput
    /**
     * Limit how many NDATemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NDATemplate upsert
   */
  export type NDATemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the NDATemplate to update in case it exists.
     */
    where: NDATemplateWhereUniqueInput
    /**
     * In case the NDATemplate found by the `where` argument doesn't exist, create a new NDATemplate with this data.
     */
    create: XOR<NDATemplateCreateInput, NDATemplateUncheckedCreateInput>
    /**
     * In case the NDATemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NDATemplateUpdateInput, NDATemplateUncheckedUpdateInput>
  }

  /**
   * NDATemplate delete
   */
  export type NDATemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
    /**
     * Filter which NDATemplate to delete.
     */
    where: NDATemplateWhereUniqueInput
  }

  /**
   * NDATemplate deleteMany
   */
  export type NDATemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NDATemplates to delete
     */
    where?: NDATemplateWhereInput
    /**
     * Limit how many NDATemplates to delete.
     */
    limit?: number
  }

  /**
   * NDATemplate.project
   */
  export type NDATemplate$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * NDATemplate without action
   */
  export type NDATemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDATemplate
     */
    select?: NDATemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDATemplate
     */
    omit?: NDATemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDATemplateInclude<ExtArgs> | null
  }


  /**
   * Model SearchQuery
   */

  export type AggregateSearchQuery = {
    _count: SearchQueryCountAggregateOutputType | null
    _min: SearchQueryMinAggregateOutputType | null
    _max: SearchQueryMaxAggregateOutputType | null
  }

  export type SearchQueryMinAggregateOutputType = {
    id: string | null
    query: string | null
    createdAt: Date | null
  }

  export type SearchQueryMaxAggregateOutputType = {
    id: string | null
    query: string | null
    createdAt: Date | null
  }

  export type SearchQueryCountAggregateOutputType = {
    id: number
    query: number
    results: number
    createdAt: number
    _all: number
  }


  export type SearchQueryMinAggregateInputType = {
    id?: true
    query?: true
    createdAt?: true
  }

  export type SearchQueryMaxAggregateInputType = {
    id?: true
    query?: true
    createdAt?: true
  }

  export type SearchQueryCountAggregateInputType = {
    id?: true
    query?: true
    results?: true
    createdAt?: true
    _all?: true
  }

  export type SearchQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchQuery to aggregate.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchQueries
    **/
    _count?: true | SearchQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchQueryMaxAggregateInputType
  }

  export type GetSearchQueryAggregateType<T extends SearchQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchQuery[P]>
      : GetScalarType<T[P], AggregateSearchQuery[P]>
  }




  export type SearchQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchQueryWhereInput
    orderBy?: SearchQueryOrderByWithAggregationInput | SearchQueryOrderByWithAggregationInput[]
    by: SearchQueryScalarFieldEnum[] | SearchQueryScalarFieldEnum
    having?: SearchQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchQueryCountAggregateInputType | true
    _min?: SearchQueryMinAggregateInputType
    _max?: SearchQueryMaxAggregateInputType
  }

  export type SearchQueryGroupByOutputType = {
    id: string
    query: string
    results: JsonValue | null
    createdAt: Date
    _count: SearchQueryCountAggregateOutputType | null
    _min: SearchQueryMinAggregateOutputType | null
    _max: SearchQueryMaxAggregateOutputType | null
  }

  type GetSearchQueryGroupByPayload<T extends SearchQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchQueryGroupByOutputType[P]>
            : GetScalarType<T[P], SearchQueryGroupByOutputType[P]>
        }
      >
    >


  export type SearchQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    results?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    results?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    results?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectScalar = {
    id?: boolean
    query?: boolean
    results?: boolean
    createdAt?: boolean
  }

  export type SearchQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "query" | "results" | "createdAt", ExtArgs["result"]["searchQuery"]>

  export type $SearchQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchQuery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      query: string
      results: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["searchQuery"]>
    composites: {}
  }

  type SearchQueryGetPayload<S extends boolean | null | undefined | SearchQueryDefaultArgs> = $Result.GetResult<Prisma.$SearchQueryPayload, S>

  type SearchQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchQueryCountAggregateInputType | true
    }

  export interface SearchQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchQuery'], meta: { name: 'SearchQuery' } }
    /**
     * Find zero or one SearchQuery that matches the filter.
     * @param {SearchQueryFindUniqueArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchQueryFindUniqueArgs>(args: SelectSubset<T, SearchQueryFindUniqueArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchQueryFindUniqueOrThrowArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindFirstArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchQueryFindFirstArgs>(args?: SelectSubset<T, SearchQueryFindFirstArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindFirstOrThrowArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchQueries
     * const searchQueries = await prisma.searchQuery.findMany()
     * 
     * // Get first 10 SearchQueries
     * const searchQueries = await prisma.searchQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchQueryFindManyArgs>(args?: SelectSubset<T, SearchQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchQuery.
     * @param {SearchQueryCreateArgs} args - Arguments to create a SearchQuery.
     * @example
     * // Create one SearchQuery
     * const SearchQuery = await prisma.searchQuery.create({
     *   data: {
     *     // ... data to create a SearchQuery
     *   }
     * })
     * 
     */
    create<T extends SearchQueryCreateArgs>(args: SelectSubset<T, SearchQueryCreateArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchQueries.
     * @param {SearchQueryCreateManyArgs} args - Arguments to create many SearchQueries.
     * @example
     * // Create many SearchQueries
     * const searchQuery = await prisma.searchQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchQueryCreateManyArgs>(args?: SelectSubset<T, SearchQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchQueries and returns the data saved in the database.
     * @param {SearchQueryCreateManyAndReturnArgs} args - Arguments to create many SearchQueries.
     * @example
     * // Create many SearchQueries
     * const searchQuery = await prisma.searchQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchQueries and only return the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchQuery.
     * @param {SearchQueryDeleteArgs} args - Arguments to delete one SearchQuery.
     * @example
     * // Delete one SearchQuery
     * const SearchQuery = await prisma.searchQuery.delete({
     *   where: {
     *     // ... filter to delete one SearchQuery
     *   }
     * })
     * 
     */
    delete<T extends SearchQueryDeleteArgs>(args: SelectSubset<T, SearchQueryDeleteArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchQuery.
     * @param {SearchQueryUpdateArgs} args - Arguments to update one SearchQuery.
     * @example
     * // Update one SearchQuery
     * const searchQuery = await prisma.searchQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchQueryUpdateArgs>(args: SelectSubset<T, SearchQueryUpdateArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchQueries.
     * @param {SearchQueryDeleteManyArgs} args - Arguments to filter SearchQueries to delete.
     * @example
     * // Delete a few SearchQueries
     * const { count } = await prisma.searchQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchQueryDeleteManyArgs>(args?: SelectSubset<T, SearchQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchQueries
     * const searchQuery = await prisma.searchQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchQueryUpdateManyArgs>(args: SelectSubset<T, SearchQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchQueries and returns the data updated in the database.
     * @param {SearchQueryUpdateManyAndReturnArgs} args - Arguments to update many SearchQueries.
     * @example
     * // Update many SearchQueries
     * const searchQuery = await prisma.searchQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchQueries and only return the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchQuery.
     * @param {SearchQueryUpsertArgs} args - Arguments to update or create a SearchQuery.
     * @example
     * // Update or create a SearchQuery
     * const searchQuery = await prisma.searchQuery.upsert({
     *   create: {
     *     // ... data to create a SearchQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchQuery we want to update
     *   }
     * })
     */
    upsert<T extends SearchQueryUpsertArgs>(args: SelectSubset<T, SearchQueryUpsertArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryCountArgs} args - Arguments to filter SearchQueries to count.
     * @example
     * // Count the number of SearchQueries
     * const count = await prisma.searchQuery.count({
     *   where: {
     *     // ... the filter for the SearchQueries we want to count
     *   }
     * })
    **/
    count<T extends SearchQueryCountArgs>(
      args?: Subset<T, SearchQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchQueryAggregateArgs>(args: Subset<T, SearchQueryAggregateArgs>): Prisma.PrismaPromise<GetSearchQueryAggregateType<T>>

    /**
     * Group by SearchQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchQueryGroupByArgs['orderBy'] }
        : { orderBy?: SearchQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchQuery model
   */
  readonly fields: SearchQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchQuery model
   */
  interface SearchQueryFieldRefs {
    readonly id: FieldRef<"SearchQuery", 'String'>
    readonly query: FieldRef<"SearchQuery", 'String'>
    readonly results: FieldRef<"SearchQuery", 'Json'>
    readonly createdAt: FieldRef<"SearchQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchQuery findUnique
   */
  export type SearchQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery findUniqueOrThrow
   */
  export type SearchQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery findFirst
   */
  export type SearchQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchQueries.
     */
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery findFirstOrThrow
   */
  export type SearchQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchQueries.
     */
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery findMany
   */
  export type SearchQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQueries to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery create
   */
  export type SearchQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data needed to create a SearchQuery.
     */
    data: XOR<SearchQueryCreateInput, SearchQueryUncheckedCreateInput>
  }

  /**
   * SearchQuery createMany
   */
  export type SearchQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchQueries.
     */
    data: SearchQueryCreateManyInput | SearchQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchQuery createManyAndReturn
   */
  export type SearchQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data used to create many SearchQueries.
     */
    data: SearchQueryCreateManyInput | SearchQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchQuery update
   */
  export type SearchQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data needed to update a SearchQuery.
     */
    data: XOR<SearchQueryUpdateInput, SearchQueryUncheckedUpdateInput>
    /**
     * Choose, which SearchQuery to update.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery updateMany
   */
  export type SearchQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchQueries.
     */
    data: XOR<SearchQueryUpdateManyMutationInput, SearchQueryUncheckedUpdateManyInput>
    /**
     * Filter which SearchQueries to update
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to update.
     */
    limit?: number
  }

  /**
   * SearchQuery updateManyAndReturn
   */
  export type SearchQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data used to update SearchQueries.
     */
    data: XOR<SearchQueryUpdateManyMutationInput, SearchQueryUncheckedUpdateManyInput>
    /**
     * Filter which SearchQueries to update
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to update.
     */
    limit?: number
  }

  /**
   * SearchQuery upsert
   */
  export type SearchQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The filter to search for the SearchQuery to update in case it exists.
     */
    where: SearchQueryWhereUniqueInput
    /**
     * In case the SearchQuery found by the `where` argument doesn't exist, create a new SearchQuery with this data.
     */
    create: XOR<SearchQueryCreateInput, SearchQueryUncheckedCreateInput>
    /**
     * In case the SearchQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchQueryUpdateInput, SearchQueryUncheckedUpdateInput>
  }

  /**
   * SearchQuery delete
   */
  export type SearchQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter which SearchQuery to delete.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery deleteMany
   */
  export type SearchQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchQueries to delete
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to delete.
     */
    limit?: number
  }

  /**
   * SearchQuery without action
   */
  export type SearchQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
  }


  /**
   * Model FreelancerApplication
   */

  export type AggregateFreelancerApplication = {
    _count: FreelancerApplicationCountAggregateOutputType | null
    _min: FreelancerApplicationMinAggregateOutputType | null
    _max: FreelancerApplicationMaxAggregateOutputType | null
  }

  export type FreelancerApplicationMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    bio: string | null
    developerType: $Enums.DeveloperType | null
    portfolioUrl: string | null
    resumeUrl: string | null
    isApproved: boolean | null
    isRejected: boolean | null
    adminNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FreelancerApplicationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    bio: string | null
    developerType: $Enums.DeveloperType | null
    portfolioUrl: string | null
    resumeUrl: string | null
    isApproved: boolean | null
    isRejected: boolean | null
    adminNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FreelancerApplicationCountAggregateOutputType = {
    id: number
    email: number
    name: number
    bio: number
    developerType: number
    portfolioUrl: number
    resumeUrl: number
    isApproved: number
    isRejected: number
    adminNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FreelancerApplicationMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    bio?: true
    developerType?: true
    portfolioUrl?: true
    resumeUrl?: true
    isApproved?: true
    isRejected?: true
    adminNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FreelancerApplicationMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    bio?: true
    developerType?: true
    portfolioUrl?: true
    resumeUrl?: true
    isApproved?: true
    isRejected?: true
    adminNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FreelancerApplicationCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    bio?: true
    developerType?: true
    portfolioUrl?: true
    resumeUrl?: true
    isApproved?: true
    isRejected?: true
    adminNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FreelancerApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreelancerApplication to aggregate.
     */
    where?: FreelancerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelancerApplications to fetch.
     */
    orderBy?: FreelancerApplicationOrderByWithRelationInput | FreelancerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FreelancerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelancerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelancerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FreelancerApplications
    **/
    _count?: true | FreelancerApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreelancerApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreelancerApplicationMaxAggregateInputType
  }

  export type GetFreelancerApplicationAggregateType<T extends FreelancerApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateFreelancerApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelancerApplication[P]>
      : GetScalarType<T[P], AggregateFreelancerApplication[P]>
  }




  export type FreelancerApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreelancerApplicationWhereInput
    orderBy?: FreelancerApplicationOrderByWithAggregationInput | FreelancerApplicationOrderByWithAggregationInput[]
    by: FreelancerApplicationScalarFieldEnum[] | FreelancerApplicationScalarFieldEnum
    having?: FreelancerApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreelancerApplicationCountAggregateInputType | true
    _min?: FreelancerApplicationMinAggregateInputType
    _max?: FreelancerApplicationMaxAggregateInputType
  }

  export type FreelancerApplicationGroupByOutputType = {
    id: string
    email: string
    name: string
    bio: string
    developerType: $Enums.DeveloperType
    portfolioUrl: string | null
    resumeUrl: string | null
    isApproved: boolean
    isRejected: boolean
    adminNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: FreelancerApplicationCountAggregateOutputType | null
    _min: FreelancerApplicationMinAggregateOutputType | null
    _max: FreelancerApplicationMaxAggregateOutputType | null
  }

  type GetFreelancerApplicationGroupByPayload<T extends FreelancerApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreelancerApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreelancerApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreelancerApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], FreelancerApplicationGroupByOutputType[P]>
        }
      >
    >


  export type FreelancerApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    developerType?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    isApproved?: boolean
    isRejected?: boolean
    adminNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["freelancerApplication"]>

  export type FreelancerApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    developerType?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    isApproved?: boolean
    isRejected?: boolean
    adminNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["freelancerApplication"]>

  export type FreelancerApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    developerType?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    isApproved?: boolean
    isRejected?: boolean
    adminNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["freelancerApplication"]>

  export type FreelancerApplicationSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    bio?: boolean
    developerType?: boolean
    portfolioUrl?: boolean
    resumeUrl?: boolean
    isApproved?: boolean
    isRejected?: boolean
    adminNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FreelancerApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "bio" | "developerType" | "portfolioUrl" | "resumeUrl" | "isApproved" | "isRejected" | "adminNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["freelancerApplication"]>

  export type $FreelancerApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FreelancerApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      bio: string
      developerType: $Enums.DeveloperType
      portfolioUrl: string | null
      resumeUrl: string | null
      isApproved: boolean
      isRejected: boolean
      adminNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["freelancerApplication"]>
    composites: {}
  }

  type FreelancerApplicationGetPayload<S extends boolean | null | undefined | FreelancerApplicationDefaultArgs> = $Result.GetResult<Prisma.$FreelancerApplicationPayload, S>

  type FreelancerApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FreelancerApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreelancerApplicationCountAggregateInputType | true
    }

  export interface FreelancerApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FreelancerApplication'], meta: { name: 'FreelancerApplication' } }
    /**
     * Find zero or one FreelancerApplication that matches the filter.
     * @param {FreelancerApplicationFindUniqueArgs} args - Arguments to find a FreelancerApplication
     * @example
     * // Get one FreelancerApplication
     * const freelancerApplication = await prisma.freelancerApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FreelancerApplicationFindUniqueArgs>(args: SelectSubset<T, FreelancerApplicationFindUniqueArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FreelancerApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FreelancerApplicationFindUniqueOrThrowArgs} args - Arguments to find a FreelancerApplication
     * @example
     * // Get one FreelancerApplication
     * const freelancerApplication = await prisma.freelancerApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FreelancerApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, FreelancerApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FreelancerApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerApplicationFindFirstArgs} args - Arguments to find a FreelancerApplication
     * @example
     * // Get one FreelancerApplication
     * const freelancerApplication = await prisma.freelancerApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FreelancerApplicationFindFirstArgs>(args?: SelectSubset<T, FreelancerApplicationFindFirstArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FreelancerApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerApplicationFindFirstOrThrowArgs} args - Arguments to find a FreelancerApplication
     * @example
     * // Get one FreelancerApplication
     * const freelancerApplication = await prisma.freelancerApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FreelancerApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, FreelancerApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FreelancerApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FreelancerApplications
     * const freelancerApplications = await prisma.freelancerApplication.findMany()
     * 
     * // Get first 10 FreelancerApplications
     * const freelancerApplications = await prisma.freelancerApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freelancerApplicationWithIdOnly = await prisma.freelancerApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FreelancerApplicationFindManyArgs>(args?: SelectSubset<T, FreelancerApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FreelancerApplication.
     * @param {FreelancerApplicationCreateArgs} args - Arguments to create a FreelancerApplication.
     * @example
     * // Create one FreelancerApplication
     * const FreelancerApplication = await prisma.freelancerApplication.create({
     *   data: {
     *     // ... data to create a FreelancerApplication
     *   }
     * })
     * 
     */
    create<T extends FreelancerApplicationCreateArgs>(args: SelectSubset<T, FreelancerApplicationCreateArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FreelancerApplications.
     * @param {FreelancerApplicationCreateManyArgs} args - Arguments to create many FreelancerApplications.
     * @example
     * // Create many FreelancerApplications
     * const freelancerApplication = await prisma.freelancerApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FreelancerApplicationCreateManyArgs>(args?: SelectSubset<T, FreelancerApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FreelancerApplications and returns the data saved in the database.
     * @param {FreelancerApplicationCreateManyAndReturnArgs} args - Arguments to create many FreelancerApplications.
     * @example
     * // Create many FreelancerApplications
     * const freelancerApplication = await prisma.freelancerApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FreelancerApplications and only return the `id`
     * const freelancerApplicationWithIdOnly = await prisma.freelancerApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FreelancerApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, FreelancerApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FreelancerApplication.
     * @param {FreelancerApplicationDeleteArgs} args - Arguments to delete one FreelancerApplication.
     * @example
     * // Delete one FreelancerApplication
     * const FreelancerApplication = await prisma.freelancerApplication.delete({
     *   where: {
     *     // ... filter to delete one FreelancerApplication
     *   }
     * })
     * 
     */
    delete<T extends FreelancerApplicationDeleteArgs>(args: SelectSubset<T, FreelancerApplicationDeleteArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FreelancerApplication.
     * @param {FreelancerApplicationUpdateArgs} args - Arguments to update one FreelancerApplication.
     * @example
     * // Update one FreelancerApplication
     * const freelancerApplication = await prisma.freelancerApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FreelancerApplicationUpdateArgs>(args: SelectSubset<T, FreelancerApplicationUpdateArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FreelancerApplications.
     * @param {FreelancerApplicationDeleteManyArgs} args - Arguments to filter FreelancerApplications to delete.
     * @example
     * // Delete a few FreelancerApplications
     * const { count } = await prisma.freelancerApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FreelancerApplicationDeleteManyArgs>(args?: SelectSubset<T, FreelancerApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FreelancerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FreelancerApplications
     * const freelancerApplication = await prisma.freelancerApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FreelancerApplicationUpdateManyArgs>(args: SelectSubset<T, FreelancerApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FreelancerApplications and returns the data updated in the database.
     * @param {FreelancerApplicationUpdateManyAndReturnArgs} args - Arguments to update many FreelancerApplications.
     * @example
     * // Update many FreelancerApplications
     * const freelancerApplication = await prisma.freelancerApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FreelancerApplications and only return the `id`
     * const freelancerApplicationWithIdOnly = await prisma.freelancerApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FreelancerApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, FreelancerApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FreelancerApplication.
     * @param {FreelancerApplicationUpsertArgs} args - Arguments to update or create a FreelancerApplication.
     * @example
     * // Update or create a FreelancerApplication
     * const freelancerApplication = await prisma.freelancerApplication.upsert({
     *   create: {
     *     // ... data to create a FreelancerApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FreelancerApplication we want to update
     *   }
     * })
     */
    upsert<T extends FreelancerApplicationUpsertArgs>(args: SelectSubset<T, FreelancerApplicationUpsertArgs<ExtArgs>>): Prisma__FreelancerApplicationClient<$Result.GetResult<Prisma.$FreelancerApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FreelancerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerApplicationCountArgs} args - Arguments to filter FreelancerApplications to count.
     * @example
     * // Count the number of FreelancerApplications
     * const count = await prisma.freelancerApplication.count({
     *   where: {
     *     // ... the filter for the FreelancerApplications we want to count
     *   }
     * })
    **/
    count<T extends FreelancerApplicationCountArgs>(
      args?: Subset<T, FreelancerApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreelancerApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FreelancerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FreelancerApplicationAggregateArgs>(args: Subset<T, FreelancerApplicationAggregateArgs>): Prisma.PrismaPromise<GetFreelancerApplicationAggregateType<T>>

    /**
     * Group by FreelancerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FreelancerApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FreelancerApplicationGroupByArgs['orderBy'] }
        : { orderBy?: FreelancerApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FreelancerApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreelancerApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FreelancerApplication model
   */
  readonly fields: FreelancerApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FreelancerApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FreelancerApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FreelancerApplication model
   */
  interface FreelancerApplicationFieldRefs {
    readonly id: FieldRef<"FreelancerApplication", 'String'>
    readonly email: FieldRef<"FreelancerApplication", 'String'>
    readonly name: FieldRef<"FreelancerApplication", 'String'>
    readonly bio: FieldRef<"FreelancerApplication", 'String'>
    readonly developerType: FieldRef<"FreelancerApplication", 'DeveloperType'>
    readonly portfolioUrl: FieldRef<"FreelancerApplication", 'String'>
    readonly resumeUrl: FieldRef<"FreelancerApplication", 'String'>
    readonly isApproved: FieldRef<"FreelancerApplication", 'Boolean'>
    readonly isRejected: FieldRef<"FreelancerApplication", 'Boolean'>
    readonly adminNotes: FieldRef<"FreelancerApplication", 'String'>
    readonly createdAt: FieldRef<"FreelancerApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"FreelancerApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FreelancerApplication findUnique
   */
  export type FreelancerApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which FreelancerApplication to fetch.
     */
    where: FreelancerApplicationWhereUniqueInput
  }

  /**
   * FreelancerApplication findUniqueOrThrow
   */
  export type FreelancerApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which FreelancerApplication to fetch.
     */
    where: FreelancerApplicationWhereUniqueInput
  }

  /**
   * FreelancerApplication findFirst
   */
  export type FreelancerApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which FreelancerApplication to fetch.
     */
    where?: FreelancerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelancerApplications to fetch.
     */
    orderBy?: FreelancerApplicationOrderByWithRelationInput | FreelancerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreelancerApplications.
     */
    cursor?: FreelancerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelancerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelancerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreelancerApplications.
     */
    distinct?: FreelancerApplicationScalarFieldEnum | FreelancerApplicationScalarFieldEnum[]
  }

  /**
   * FreelancerApplication findFirstOrThrow
   */
  export type FreelancerApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which FreelancerApplication to fetch.
     */
    where?: FreelancerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelancerApplications to fetch.
     */
    orderBy?: FreelancerApplicationOrderByWithRelationInput | FreelancerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreelancerApplications.
     */
    cursor?: FreelancerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelancerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelancerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreelancerApplications.
     */
    distinct?: FreelancerApplicationScalarFieldEnum | FreelancerApplicationScalarFieldEnum[]
  }

  /**
   * FreelancerApplication findMany
   */
  export type FreelancerApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * Filter, which FreelancerApplications to fetch.
     */
    where?: FreelancerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreelancerApplications to fetch.
     */
    orderBy?: FreelancerApplicationOrderByWithRelationInput | FreelancerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FreelancerApplications.
     */
    cursor?: FreelancerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreelancerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreelancerApplications.
     */
    skip?: number
    distinct?: FreelancerApplicationScalarFieldEnum | FreelancerApplicationScalarFieldEnum[]
  }

  /**
   * FreelancerApplication create
   */
  export type FreelancerApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a FreelancerApplication.
     */
    data: XOR<FreelancerApplicationCreateInput, FreelancerApplicationUncheckedCreateInput>
  }

  /**
   * FreelancerApplication createMany
   */
  export type FreelancerApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FreelancerApplications.
     */
    data: FreelancerApplicationCreateManyInput | FreelancerApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FreelancerApplication createManyAndReturn
   */
  export type FreelancerApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many FreelancerApplications.
     */
    data: FreelancerApplicationCreateManyInput | FreelancerApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FreelancerApplication update
   */
  export type FreelancerApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a FreelancerApplication.
     */
    data: XOR<FreelancerApplicationUpdateInput, FreelancerApplicationUncheckedUpdateInput>
    /**
     * Choose, which FreelancerApplication to update.
     */
    where: FreelancerApplicationWhereUniqueInput
  }

  /**
   * FreelancerApplication updateMany
   */
  export type FreelancerApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FreelancerApplications.
     */
    data: XOR<FreelancerApplicationUpdateManyMutationInput, FreelancerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which FreelancerApplications to update
     */
    where?: FreelancerApplicationWhereInput
    /**
     * Limit how many FreelancerApplications to update.
     */
    limit?: number
  }

  /**
   * FreelancerApplication updateManyAndReturn
   */
  export type FreelancerApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * The data used to update FreelancerApplications.
     */
    data: XOR<FreelancerApplicationUpdateManyMutationInput, FreelancerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which FreelancerApplications to update
     */
    where?: FreelancerApplicationWhereInput
    /**
     * Limit how many FreelancerApplications to update.
     */
    limit?: number
  }

  /**
   * FreelancerApplication upsert
   */
  export type FreelancerApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the FreelancerApplication to update in case it exists.
     */
    where: FreelancerApplicationWhereUniqueInput
    /**
     * In case the FreelancerApplication found by the `where` argument doesn't exist, create a new FreelancerApplication with this data.
     */
    create: XOR<FreelancerApplicationCreateInput, FreelancerApplicationUncheckedCreateInput>
    /**
     * In case the FreelancerApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FreelancerApplicationUpdateInput, FreelancerApplicationUncheckedUpdateInput>
  }

  /**
   * FreelancerApplication delete
   */
  export type FreelancerApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
    /**
     * Filter which FreelancerApplication to delete.
     */
    where: FreelancerApplicationWhereUniqueInput
  }

  /**
   * FreelancerApplication deleteMany
   */
  export type FreelancerApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreelancerApplications to delete
     */
    where?: FreelancerApplicationWhereInput
    /**
     * Limit how many FreelancerApplications to delete.
     */
    limit?: number
  }

  /**
   * FreelancerApplication without action
   */
  export type FreelancerApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerApplication
     */
    select?: FreelancerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FreelancerApplication
     */
    omit?: FreelancerApplicationOmit<ExtArgs> | null
  }


  /**
   * Model PaymentPlanConfig
   */

  export type AggregatePaymentPlanConfig = {
    _count: PaymentPlanConfigCountAggregateOutputType | null
    _avg: PaymentPlanConfigAvgAggregateOutputType | null
    _sum: PaymentPlanConfigSumAggregateOutputType | null
    _min: PaymentPlanConfigMinAggregateOutputType | null
    _max: PaymentPlanConfigMaxAggregateOutputType | null
  }

  export type PaymentPlanConfigAvgAggregateOutputType = {
    hourlyRate: number | null
    equityPercentage: number | null
  }

  export type PaymentPlanConfigSumAggregateOutputType = {
    hourlyRate: number | null
    equityPercentage: number | null
  }

  export type PaymentPlanConfigMinAggregateOutputType = {
    id: string | null
    planType: $Enums.PaymentPlan | null
    hourlyRate: number | null
    equityPercentage: number | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPlanConfigMaxAggregateOutputType = {
    id: string | null
    planType: $Enums.PaymentPlan | null
    hourlyRate: number | null
    equityPercentage: number | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPlanConfigCountAggregateOutputType = {
    id: number
    planType: number
    hourlyRate: number
    equityPercentage: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentPlanConfigAvgAggregateInputType = {
    hourlyRate?: true
    equityPercentage?: true
  }

  export type PaymentPlanConfigSumAggregateInputType = {
    hourlyRate?: true
    equityPercentage?: true
  }

  export type PaymentPlanConfigMinAggregateInputType = {
    id?: true
    planType?: true
    hourlyRate?: true
    equityPercentage?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPlanConfigMaxAggregateInputType = {
    id?: true
    planType?: true
    hourlyRate?: true
    equityPercentage?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPlanConfigCountAggregateInputType = {
    id?: true
    planType?: true
    hourlyRate?: true
    equityPercentage?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentPlanConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPlanConfig to aggregate.
     */
    where?: PaymentPlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlanConfigs to fetch.
     */
    orderBy?: PaymentPlanConfigOrderByWithRelationInput | PaymentPlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlanConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentPlanConfigs
    **/
    _count?: true | PaymentPlanConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentPlanConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentPlanConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPlanConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPlanConfigMaxAggregateInputType
  }

  export type GetPaymentPlanConfigAggregateType<T extends PaymentPlanConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPlanConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPlanConfig[P]>
      : GetScalarType<T[P], AggregatePaymentPlanConfig[P]>
  }




  export type PaymentPlanConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPlanConfigWhereInput
    orderBy?: PaymentPlanConfigOrderByWithAggregationInput | PaymentPlanConfigOrderByWithAggregationInput[]
    by: PaymentPlanConfigScalarFieldEnum[] | PaymentPlanConfigScalarFieldEnum
    having?: PaymentPlanConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPlanConfigCountAggregateInputType | true
    _avg?: PaymentPlanConfigAvgAggregateInputType
    _sum?: PaymentPlanConfigSumAggregateInputType
    _min?: PaymentPlanConfigMinAggregateInputType
    _max?: PaymentPlanConfigMaxAggregateInputType
  }

  export type PaymentPlanConfigGroupByOutputType = {
    id: string
    planType: $Enums.PaymentPlan
    hourlyRate: number
    equityPercentage: number | null
    description: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentPlanConfigCountAggregateOutputType | null
    _avg: PaymentPlanConfigAvgAggregateOutputType | null
    _sum: PaymentPlanConfigSumAggregateOutputType | null
    _min: PaymentPlanConfigMinAggregateOutputType | null
    _max: PaymentPlanConfigMaxAggregateOutputType | null
  }

  type GetPaymentPlanConfigGroupByPayload<T extends PaymentPlanConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPlanConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPlanConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPlanConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPlanConfigGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPlanConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planType?: boolean
    hourlyRate?: boolean
    equityPercentage?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentPlanConfig"]>

  export type PaymentPlanConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planType?: boolean
    hourlyRate?: boolean
    equityPercentage?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentPlanConfig"]>

  export type PaymentPlanConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planType?: boolean
    hourlyRate?: boolean
    equityPercentage?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentPlanConfig"]>

  export type PaymentPlanConfigSelectScalar = {
    id?: boolean
    planType?: boolean
    hourlyRate?: boolean
    equityPercentage?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentPlanConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planType" | "hourlyRate" | "equityPercentage" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentPlanConfig"]>

  export type $PaymentPlanConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPlanConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planType: $Enums.PaymentPlan
      hourlyRate: number
      equityPercentage: number | null
      description: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentPlanConfig"]>
    composites: {}
  }

  type PaymentPlanConfigGetPayload<S extends boolean | null | undefined | PaymentPlanConfigDefaultArgs> = $Result.GetResult<Prisma.$PaymentPlanConfigPayload, S>

  type PaymentPlanConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPlanConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPlanConfigCountAggregateInputType | true
    }

  export interface PaymentPlanConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPlanConfig'], meta: { name: 'PaymentPlanConfig' } }
    /**
     * Find zero or one PaymentPlanConfig that matches the filter.
     * @param {PaymentPlanConfigFindUniqueArgs} args - Arguments to find a PaymentPlanConfig
     * @example
     * // Get one PaymentPlanConfig
     * const paymentPlanConfig = await prisma.paymentPlanConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPlanConfigFindUniqueArgs>(args: SelectSubset<T, PaymentPlanConfigFindUniqueArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPlanConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPlanConfigFindUniqueOrThrowArgs} args - Arguments to find a PaymentPlanConfig
     * @example
     * // Get one PaymentPlanConfig
     * const paymentPlanConfig = await prisma.paymentPlanConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPlanConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPlanConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPlanConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanConfigFindFirstArgs} args - Arguments to find a PaymentPlanConfig
     * @example
     * // Get one PaymentPlanConfig
     * const paymentPlanConfig = await prisma.paymentPlanConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPlanConfigFindFirstArgs>(args?: SelectSubset<T, PaymentPlanConfigFindFirstArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPlanConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanConfigFindFirstOrThrowArgs} args - Arguments to find a PaymentPlanConfig
     * @example
     * // Get one PaymentPlanConfig
     * const paymentPlanConfig = await prisma.paymentPlanConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPlanConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPlanConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentPlanConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentPlanConfigs
     * const paymentPlanConfigs = await prisma.paymentPlanConfig.findMany()
     * 
     * // Get first 10 PaymentPlanConfigs
     * const paymentPlanConfigs = await prisma.paymentPlanConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentPlanConfigWithIdOnly = await prisma.paymentPlanConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentPlanConfigFindManyArgs>(args?: SelectSubset<T, PaymentPlanConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPlanConfig.
     * @param {PaymentPlanConfigCreateArgs} args - Arguments to create a PaymentPlanConfig.
     * @example
     * // Create one PaymentPlanConfig
     * const PaymentPlanConfig = await prisma.paymentPlanConfig.create({
     *   data: {
     *     // ... data to create a PaymentPlanConfig
     *   }
     * })
     * 
     */
    create<T extends PaymentPlanConfigCreateArgs>(args: SelectSubset<T, PaymentPlanConfigCreateArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentPlanConfigs.
     * @param {PaymentPlanConfigCreateManyArgs} args - Arguments to create many PaymentPlanConfigs.
     * @example
     * // Create many PaymentPlanConfigs
     * const paymentPlanConfig = await prisma.paymentPlanConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPlanConfigCreateManyArgs>(args?: SelectSubset<T, PaymentPlanConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentPlanConfigs and returns the data saved in the database.
     * @param {PaymentPlanConfigCreateManyAndReturnArgs} args - Arguments to create many PaymentPlanConfigs.
     * @example
     * // Create many PaymentPlanConfigs
     * const paymentPlanConfig = await prisma.paymentPlanConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentPlanConfigs and only return the `id`
     * const paymentPlanConfigWithIdOnly = await prisma.paymentPlanConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentPlanConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentPlanConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentPlanConfig.
     * @param {PaymentPlanConfigDeleteArgs} args - Arguments to delete one PaymentPlanConfig.
     * @example
     * // Delete one PaymentPlanConfig
     * const PaymentPlanConfig = await prisma.paymentPlanConfig.delete({
     *   where: {
     *     // ... filter to delete one PaymentPlanConfig
     *   }
     * })
     * 
     */
    delete<T extends PaymentPlanConfigDeleteArgs>(args: SelectSubset<T, PaymentPlanConfigDeleteArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPlanConfig.
     * @param {PaymentPlanConfigUpdateArgs} args - Arguments to update one PaymentPlanConfig.
     * @example
     * // Update one PaymentPlanConfig
     * const paymentPlanConfig = await prisma.paymentPlanConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPlanConfigUpdateArgs>(args: SelectSubset<T, PaymentPlanConfigUpdateArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentPlanConfigs.
     * @param {PaymentPlanConfigDeleteManyArgs} args - Arguments to filter PaymentPlanConfigs to delete.
     * @example
     * // Delete a few PaymentPlanConfigs
     * const { count } = await prisma.paymentPlanConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPlanConfigDeleteManyArgs>(args?: SelectSubset<T, PaymentPlanConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPlanConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentPlanConfigs
     * const paymentPlanConfig = await prisma.paymentPlanConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPlanConfigUpdateManyArgs>(args: SelectSubset<T, PaymentPlanConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPlanConfigs and returns the data updated in the database.
     * @param {PaymentPlanConfigUpdateManyAndReturnArgs} args - Arguments to update many PaymentPlanConfigs.
     * @example
     * // Update many PaymentPlanConfigs
     * const paymentPlanConfig = await prisma.paymentPlanConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentPlanConfigs and only return the `id`
     * const paymentPlanConfigWithIdOnly = await prisma.paymentPlanConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentPlanConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentPlanConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentPlanConfig.
     * @param {PaymentPlanConfigUpsertArgs} args - Arguments to update or create a PaymentPlanConfig.
     * @example
     * // Update or create a PaymentPlanConfig
     * const paymentPlanConfig = await prisma.paymentPlanConfig.upsert({
     *   create: {
     *     // ... data to create a PaymentPlanConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPlanConfig we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPlanConfigUpsertArgs>(args: SelectSubset<T, PaymentPlanConfigUpsertArgs<ExtArgs>>): Prisma__PaymentPlanConfigClient<$Result.GetResult<Prisma.$PaymentPlanConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentPlanConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanConfigCountArgs} args - Arguments to filter PaymentPlanConfigs to count.
     * @example
     * // Count the number of PaymentPlanConfigs
     * const count = await prisma.paymentPlanConfig.count({
     *   where: {
     *     // ... the filter for the PaymentPlanConfigs we want to count
     *   }
     * })
    **/
    count<T extends PaymentPlanConfigCountArgs>(
      args?: Subset<T, PaymentPlanConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPlanConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPlanConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentPlanConfigAggregateArgs>(args: Subset<T, PaymentPlanConfigAggregateArgs>): Prisma.PrismaPromise<GetPaymentPlanConfigAggregateType<T>>

    /**
     * Group by PaymentPlanConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentPlanConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPlanConfigGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPlanConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentPlanConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPlanConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPlanConfig model
   */
  readonly fields: PaymentPlanConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPlanConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPlanConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentPlanConfig model
   */
  interface PaymentPlanConfigFieldRefs {
    readonly id: FieldRef<"PaymentPlanConfig", 'String'>
    readonly planType: FieldRef<"PaymentPlanConfig", 'PaymentPlan'>
    readonly hourlyRate: FieldRef<"PaymentPlanConfig", 'Float'>
    readonly equityPercentage: FieldRef<"PaymentPlanConfig", 'Float'>
    readonly description: FieldRef<"PaymentPlanConfig", 'String'>
    readonly isActive: FieldRef<"PaymentPlanConfig", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentPlanConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentPlanConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPlanConfig findUnique
   */
  export type PaymentPlanConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlanConfig to fetch.
     */
    where: PaymentPlanConfigWhereUniqueInput
  }

  /**
   * PaymentPlanConfig findUniqueOrThrow
   */
  export type PaymentPlanConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlanConfig to fetch.
     */
    where: PaymentPlanConfigWhereUniqueInput
  }

  /**
   * PaymentPlanConfig findFirst
   */
  export type PaymentPlanConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlanConfig to fetch.
     */
    where?: PaymentPlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlanConfigs to fetch.
     */
    orderBy?: PaymentPlanConfigOrderByWithRelationInput | PaymentPlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPlanConfigs.
     */
    cursor?: PaymentPlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlanConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPlanConfigs.
     */
    distinct?: PaymentPlanConfigScalarFieldEnum | PaymentPlanConfigScalarFieldEnum[]
  }

  /**
   * PaymentPlanConfig findFirstOrThrow
   */
  export type PaymentPlanConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlanConfig to fetch.
     */
    where?: PaymentPlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlanConfigs to fetch.
     */
    orderBy?: PaymentPlanConfigOrderByWithRelationInput | PaymentPlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPlanConfigs.
     */
    cursor?: PaymentPlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlanConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPlanConfigs.
     */
    distinct?: PaymentPlanConfigScalarFieldEnum | PaymentPlanConfigScalarFieldEnum[]
  }

  /**
   * PaymentPlanConfig findMany
   */
  export type PaymentPlanConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlanConfigs to fetch.
     */
    where?: PaymentPlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlanConfigs to fetch.
     */
    orderBy?: PaymentPlanConfigOrderByWithRelationInput | PaymentPlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentPlanConfigs.
     */
    cursor?: PaymentPlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlanConfigs.
     */
    skip?: number
    distinct?: PaymentPlanConfigScalarFieldEnum | PaymentPlanConfigScalarFieldEnum[]
  }

  /**
   * PaymentPlanConfig create
   */
  export type PaymentPlanConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentPlanConfig.
     */
    data: XOR<PaymentPlanConfigCreateInput, PaymentPlanConfigUncheckedCreateInput>
  }

  /**
   * PaymentPlanConfig createMany
   */
  export type PaymentPlanConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentPlanConfigs.
     */
    data: PaymentPlanConfigCreateManyInput | PaymentPlanConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPlanConfig createManyAndReturn
   */
  export type PaymentPlanConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentPlanConfigs.
     */
    data: PaymentPlanConfigCreateManyInput | PaymentPlanConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPlanConfig update
   */
  export type PaymentPlanConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentPlanConfig.
     */
    data: XOR<PaymentPlanConfigUpdateInput, PaymentPlanConfigUncheckedUpdateInput>
    /**
     * Choose, which PaymentPlanConfig to update.
     */
    where: PaymentPlanConfigWhereUniqueInput
  }

  /**
   * PaymentPlanConfig updateMany
   */
  export type PaymentPlanConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentPlanConfigs.
     */
    data: XOR<PaymentPlanConfigUpdateManyMutationInput, PaymentPlanConfigUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPlanConfigs to update
     */
    where?: PaymentPlanConfigWhereInput
    /**
     * Limit how many PaymentPlanConfigs to update.
     */
    limit?: number
  }

  /**
   * PaymentPlanConfig updateManyAndReturn
   */
  export type PaymentPlanConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * The data used to update PaymentPlanConfigs.
     */
    data: XOR<PaymentPlanConfigUpdateManyMutationInput, PaymentPlanConfigUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPlanConfigs to update
     */
    where?: PaymentPlanConfigWhereInput
    /**
     * Limit how many PaymentPlanConfigs to update.
     */
    limit?: number
  }

  /**
   * PaymentPlanConfig upsert
   */
  export type PaymentPlanConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentPlanConfig to update in case it exists.
     */
    where: PaymentPlanConfigWhereUniqueInput
    /**
     * In case the PaymentPlanConfig found by the `where` argument doesn't exist, create a new PaymentPlanConfig with this data.
     */
    create: XOR<PaymentPlanConfigCreateInput, PaymentPlanConfigUncheckedCreateInput>
    /**
     * In case the PaymentPlanConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPlanConfigUpdateInput, PaymentPlanConfigUncheckedUpdateInput>
  }

  /**
   * PaymentPlanConfig delete
   */
  export type PaymentPlanConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
    /**
     * Filter which PaymentPlanConfig to delete.
     */
    where: PaymentPlanConfigWhereUniqueInput
  }

  /**
   * PaymentPlanConfig deleteMany
   */
  export type PaymentPlanConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPlanConfigs to delete
     */
    where?: PaymentPlanConfigWhereInput
    /**
     * Limit how many PaymentPlanConfigs to delete.
     */
    limit?: number
  }

  /**
   * PaymentPlanConfig without action
   */
  export type PaymentPlanConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlanConfig
     */
    select?: PaymentPlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlanConfig
     */
    omit?: PaymentPlanConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyName: 'companyName',
    stripeCustomerId: 'stripeCustomerId',
    bio: 'bio',
    developerType: 'developerType',
    isVetted: 'isVetted',
    hourlyRate: 'hourlyRate',
    portfolioUrl: 'portfolioUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    paymentPlan: 'paymentPlan',
    equityPercentage: 'equityPercentage',
    totalBudget: 'totalBudget',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId',
    freelancerId: 'freelancerId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TimeEntryScalarFieldEnum: {
    id: 'id',
    description: 'description',
    hoursWorked: 'hoursWorked',
    hourlyRate: 'hourlyRate',
    totalAmount: 'totalAmount',
    date: 'date',
    createdAt: 'createdAt',
    projectId: 'projectId',
    freelancerId: 'freelancerId'
  };

  export type TimeEntryScalarFieldEnum = (typeof TimeEntryScalarFieldEnum)[keyof typeof TimeEntryScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    projectId: 'projectId',
    senderId: 'senderId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isCompleted: 'isCompleted',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const NDATemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId',
    projectId: 'projectId'
  };

  export type NDATemplateScalarFieldEnum = (typeof NDATemplateScalarFieldEnum)[keyof typeof NDATemplateScalarFieldEnum]


  export const SearchQueryScalarFieldEnum: {
    id: 'id',
    query: 'query',
    results: 'results',
    createdAt: 'createdAt'
  };

  export type SearchQueryScalarFieldEnum = (typeof SearchQueryScalarFieldEnum)[keyof typeof SearchQueryScalarFieldEnum]


  export const FreelancerApplicationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    bio: 'bio',
    developerType: 'developerType',
    portfolioUrl: 'portfolioUrl',
    resumeUrl: 'resumeUrl',
    isApproved: 'isApproved',
    isRejected: 'isRejected',
    adminNotes: 'adminNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FreelancerApplicationScalarFieldEnum = (typeof FreelancerApplicationScalarFieldEnum)[keyof typeof FreelancerApplicationScalarFieldEnum]


  export const PaymentPlanConfigScalarFieldEnum: {
    id: 'id',
    planType: 'planType',
    hourlyRate: 'hourlyRate',
    equityPercentage: 'equityPercentage',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentPlanConfigScalarFieldEnum = (typeof PaymentPlanConfigScalarFieldEnum)[keyof typeof PaymentPlanConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DeveloperType'
   */
  export type EnumDeveloperTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeveloperType'>
    


  /**
   * Reference to a field of type 'DeveloperType[]'
   */
  export type ListEnumDeveloperTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeveloperType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentPlan'
   */
  export type EnumPaymentPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPlan'>
    


  /**
   * Reference to a field of type 'PaymentPlan[]'
   */
  export type ListEnumPaymentPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPlan[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    companyName?: StringNullableFilter<"User"> | string | null
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    developerType?: EnumDeveloperTypeNullableFilter<"User"> | $Enums.DeveloperType | null
    isVetted?: BoolFilter<"User"> | boolean
    hourlyRate?: FloatNullableFilter<"User"> | number | null
    portfolioUrl?: StringNullableFilter<"User"> | string | null
    clientProjects?: ProjectListRelationFilter
    freelancerProjects?: ProjectListRelationFilter
    timeEntries?: TimeEntryListRelationFilter
    messages?: MessageListRelationFilter
    ndaTemplates?: NDATemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    developerType?: SortOrderInput | SortOrder
    isVetted?: SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    clientProjects?: ProjectOrderByRelationAggregateInput
    freelancerProjects?: ProjectOrderByRelationAggregateInput
    timeEntries?: TimeEntryOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    ndaTemplates?: NDATemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    companyName?: StringNullableFilter<"User"> | string | null
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    developerType?: EnumDeveloperTypeNullableFilter<"User"> | $Enums.DeveloperType | null
    isVetted?: BoolFilter<"User"> | boolean
    hourlyRate?: FloatNullableFilter<"User"> | number | null
    portfolioUrl?: StringNullableFilter<"User"> | string | null
    clientProjects?: ProjectListRelationFilter
    freelancerProjects?: ProjectListRelationFilter
    timeEntries?: TimeEntryListRelationFilter
    messages?: MessageListRelationFilter
    ndaTemplates?: NDATemplateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    developerType?: SortOrderInput | SortOrder
    isVetted?: SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    developerType?: EnumDeveloperTypeNullableWithAggregatesFilter<"User"> | $Enums.DeveloperType | null
    isVetted?: BoolWithAggregatesFilter<"User"> | boolean
    hourlyRate?: FloatNullableWithAggregatesFilter<"User"> | number | null
    portfolioUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFilter<"Project"> | $Enums.PaymentPlan
    equityPercentage?: FloatNullableFilter<"Project"> | number | null
    totalBudget?: FloatNullableFilter<"Project"> | number | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    clientId?: StringFilter<"Project"> | string
    freelancerId?: StringNullableFilter<"Project"> | string | null
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    freelancer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    timeEntries?: TimeEntryListRelationFilter
    messages?: MessageListRelationFilter
    milestones?: MilestoneListRelationFilter
    ndaTemplate?: XOR<NDATemplateNullableScalarRelationFilter, NDATemplateWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentPlan?: SortOrder
    equityPercentage?: SortOrderInput | SortOrder
    totalBudget?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    freelancerId?: SortOrderInput | SortOrder
    client?: UserOrderByWithRelationInput
    freelancer?: UserOrderByWithRelationInput
    timeEntries?: TimeEntryOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    milestones?: MilestoneOrderByRelationAggregateInput
    ndaTemplate?: NDATemplateOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFilter<"Project"> | $Enums.PaymentPlan
    equityPercentage?: FloatNullableFilter<"Project"> | number | null
    totalBudget?: FloatNullableFilter<"Project"> | number | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    clientId?: StringFilter<"Project"> | string
    freelancerId?: StringNullableFilter<"Project"> | string | null
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    freelancer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    timeEntries?: TimeEntryListRelationFilter
    messages?: MessageListRelationFilter
    milestones?: MilestoneListRelationFilter
    ndaTemplate?: XOR<NDATemplateNullableScalarRelationFilter, NDATemplateWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentPlan?: SortOrder
    equityPercentage?: SortOrderInput | SortOrder
    totalBudget?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    freelancerId?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanWithAggregatesFilter<"Project"> | $Enums.PaymentPlan
    equityPercentage?: FloatNullableWithAggregatesFilter<"Project"> | number | null
    totalBudget?: FloatNullableWithAggregatesFilter<"Project"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    clientId?: StringWithAggregatesFilter<"Project"> | string
    freelancerId?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type TimeEntryWhereInput = {
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    id?: StringFilter<"TimeEntry"> | string
    description?: StringNullableFilter<"TimeEntry"> | string | null
    hoursWorked?: FloatFilter<"TimeEntry"> | number
    hourlyRate?: FloatFilter<"TimeEntry"> | number
    totalAmount?: FloatFilter<"TimeEntry"> | number
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    projectId?: StringFilter<"TimeEntry"> | string
    freelancerId?: StringFilter<"TimeEntry"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    freelancer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TimeEntryOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    hoursWorked?: SortOrder
    hourlyRate?: SortOrder
    totalAmount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    freelancerId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    freelancer?: UserOrderByWithRelationInput
  }

  export type TimeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    description?: StringNullableFilter<"TimeEntry"> | string | null
    hoursWorked?: FloatFilter<"TimeEntry"> | number
    hourlyRate?: FloatFilter<"TimeEntry"> | number
    totalAmount?: FloatFilter<"TimeEntry"> | number
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    projectId?: StringFilter<"TimeEntry"> | string
    freelancerId?: StringFilter<"TimeEntry"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    freelancer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TimeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    hoursWorked?: SortOrder
    hourlyRate?: SortOrder
    totalAmount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    freelancerId?: SortOrder
    _count?: TimeEntryCountOrderByAggregateInput
    _avg?: TimeEntryAvgOrderByAggregateInput
    _max?: TimeEntryMaxOrderByAggregateInput
    _min?: TimeEntryMinOrderByAggregateInput
    _sum?: TimeEntrySumOrderByAggregateInput
  }

  export type TimeEntryScalarWhereWithAggregatesInput = {
    AND?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    OR?: TimeEntryScalarWhereWithAggregatesInput[]
    NOT?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeEntry"> | string
    description?: StringNullableWithAggregatesFilter<"TimeEntry"> | string | null
    hoursWorked?: FloatWithAggregatesFilter<"TimeEntry"> | number
    hourlyRate?: FloatWithAggregatesFilter<"TimeEntry"> | number
    totalAmount?: FloatWithAggregatesFilter<"TimeEntry"> | number
    date?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    projectId?: StringWithAggregatesFilter<"TimeEntry"> | string
    freelancerId?: StringWithAggregatesFilter<"TimeEntry"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    projectId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    projectId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    projectId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    isCompleted?: BoolFilter<"Milestone"> | boolean
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    projectId?: StringFilter<"Milestone"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    isCompleted?: BoolFilter<"Milestone"> | boolean
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    projectId?: StringFilter<"Milestone"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    title?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    isCompleted?: BoolWithAggregatesFilter<"Milestone"> | boolean
    dueDate?: DateTimeNullableWithAggregatesFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    projectId?: StringWithAggregatesFilter<"Milestone"> | string
  }

  export type NDATemplateWhereInput = {
    AND?: NDATemplateWhereInput | NDATemplateWhereInput[]
    OR?: NDATemplateWhereInput[]
    NOT?: NDATemplateWhereInput | NDATemplateWhereInput[]
    id?: StringFilter<"NDATemplate"> | string
    title?: StringFilter<"NDATemplate"> | string
    content?: StringFilter<"NDATemplate"> | string
    isActive?: BoolFilter<"NDATemplate"> | boolean
    createdAt?: DateTimeFilter<"NDATemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NDATemplate"> | Date | string
    clientId?: StringFilter<"NDATemplate"> | string
    projectId?: StringNullableFilter<"NDATemplate"> | string | null
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }

  export type NDATemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    client?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type NDATemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    projectId?: string
    AND?: NDATemplateWhereInput | NDATemplateWhereInput[]
    OR?: NDATemplateWhereInput[]
    NOT?: NDATemplateWhereInput | NDATemplateWhereInput[]
    title?: StringFilter<"NDATemplate"> | string
    content?: StringFilter<"NDATemplate"> | string
    isActive?: BoolFilter<"NDATemplate"> | boolean
    createdAt?: DateTimeFilter<"NDATemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NDATemplate"> | Date | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id" | "clientId" | "projectId">

  export type NDATemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    _count?: NDATemplateCountOrderByAggregateInput
    _max?: NDATemplateMaxOrderByAggregateInput
    _min?: NDATemplateMinOrderByAggregateInput
  }

  export type NDATemplateScalarWhereWithAggregatesInput = {
    AND?: NDATemplateScalarWhereWithAggregatesInput | NDATemplateScalarWhereWithAggregatesInput[]
    OR?: NDATemplateScalarWhereWithAggregatesInput[]
    NOT?: NDATemplateScalarWhereWithAggregatesInput | NDATemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NDATemplate"> | string
    title?: StringWithAggregatesFilter<"NDATemplate"> | string
    content?: StringWithAggregatesFilter<"NDATemplate"> | string
    isActive?: BoolWithAggregatesFilter<"NDATemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NDATemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NDATemplate"> | Date | string
    clientId?: StringWithAggregatesFilter<"NDATemplate"> | string
    projectId?: StringNullableWithAggregatesFilter<"NDATemplate"> | string | null
  }

  export type SearchQueryWhereInput = {
    AND?: SearchQueryWhereInput | SearchQueryWhereInput[]
    OR?: SearchQueryWhereInput[]
    NOT?: SearchQueryWhereInput | SearchQueryWhereInput[]
    id?: StringFilter<"SearchQuery"> | string
    query?: StringFilter<"SearchQuery"> | string
    results?: JsonNullableFilter<"SearchQuery">
    createdAt?: DateTimeFilter<"SearchQuery"> | Date | string
  }

  export type SearchQueryOrderByWithRelationInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SearchQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SearchQueryWhereInput | SearchQueryWhereInput[]
    OR?: SearchQueryWhereInput[]
    NOT?: SearchQueryWhereInput | SearchQueryWhereInput[]
    query?: StringFilter<"SearchQuery"> | string
    results?: JsonNullableFilter<"SearchQuery">
    createdAt?: DateTimeFilter<"SearchQuery"> | Date | string
  }, "id">

  export type SearchQueryOrderByWithAggregationInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SearchQueryCountOrderByAggregateInput
    _max?: SearchQueryMaxOrderByAggregateInput
    _min?: SearchQueryMinOrderByAggregateInput
  }

  export type SearchQueryScalarWhereWithAggregatesInput = {
    AND?: SearchQueryScalarWhereWithAggregatesInput | SearchQueryScalarWhereWithAggregatesInput[]
    OR?: SearchQueryScalarWhereWithAggregatesInput[]
    NOT?: SearchQueryScalarWhereWithAggregatesInput | SearchQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchQuery"> | string
    query?: StringWithAggregatesFilter<"SearchQuery"> | string
    results?: JsonNullableWithAggregatesFilter<"SearchQuery">
    createdAt?: DateTimeWithAggregatesFilter<"SearchQuery"> | Date | string
  }

  export type FreelancerApplicationWhereInput = {
    AND?: FreelancerApplicationWhereInput | FreelancerApplicationWhereInput[]
    OR?: FreelancerApplicationWhereInput[]
    NOT?: FreelancerApplicationWhereInput | FreelancerApplicationWhereInput[]
    id?: StringFilter<"FreelancerApplication"> | string
    email?: StringFilter<"FreelancerApplication"> | string
    name?: StringFilter<"FreelancerApplication"> | string
    bio?: StringFilter<"FreelancerApplication"> | string
    developerType?: EnumDeveloperTypeFilter<"FreelancerApplication"> | $Enums.DeveloperType
    portfolioUrl?: StringNullableFilter<"FreelancerApplication"> | string | null
    resumeUrl?: StringNullableFilter<"FreelancerApplication"> | string | null
    isApproved?: BoolFilter<"FreelancerApplication"> | boolean
    isRejected?: BoolFilter<"FreelancerApplication"> | boolean
    adminNotes?: StringNullableFilter<"FreelancerApplication"> | string | null
    createdAt?: DateTimeFilter<"FreelancerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"FreelancerApplication"> | Date | string
  }

  export type FreelancerApplicationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    adminNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelancerApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FreelancerApplicationWhereInput | FreelancerApplicationWhereInput[]
    OR?: FreelancerApplicationWhereInput[]
    NOT?: FreelancerApplicationWhereInput | FreelancerApplicationWhereInput[]
    email?: StringFilter<"FreelancerApplication"> | string
    name?: StringFilter<"FreelancerApplication"> | string
    bio?: StringFilter<"FreelancerApplication"> | string
    developerType?: EnumDeveloperTypeFilter<"FreelancerApplication"> | $Enums.DeveloperType
    portfolioUrl?: StringNullableFilter<"FreelancerApplication"> | string | null
    resumeUrl?: StringNullableFilter<"FreelancerApplication"> | string | null
    isApproved?: BoolFilter<"FreelancerApplication"> | boolean
    isRejected?: BoolFilter<"FreelancerApplication"> | boolean
    adminNotes?: StringNullableFilter<"FreelancerApplication"> | string | null
    createdAt?: DateTimeFilter<"FreelancerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"FreelancerApplication"> | Date | string
  }, "id">

  export type FreelancerApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    adminNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FreelancerApplicationCountOrderByAggregateInput
    _max?: FreelancerApplicationMaxOrderByAggregateInput
    _min?: FreelancerApplicationMinOrderByAggregateInput
  }

  export type FreelancerApplicationScalarWhereWithAggregatesInput = {
    AND?: FreelancerApplicationScalarWhereWithAggregatesInput | FreelancerApplicationScalarWhereWithAggregatesInput[]
    OR?: FreelancerApplicationScalarWhereWithAggregatesInput[]
    NOT?: FreelancerApplicationScalarWhereWithAggregatesInput | FreelancerApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FreelancerApplication"> | string
    email?: StringWithAggregatesFilter<"FreelancerApplication"> | string
    name?: StringWithAggregatesFilter<"FreelancerApplication"> | string
    bio?: StringWithAggregatesFilter<"FreelancerApplication"> | string
    developerType?: EnumDeveloperTypeWithAggregatesFilter<"FreelancerApplication"> | $Enums.DeveloperType
    portfolioUrl?: StringNullableWithAggregatesFilter<"FreelancerApplication"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"FreelancerApplication"> | string | null
    isApproved?: BoolWithAggregatesFilter<"FreelancerApplication"> | boolean
    isRejected?: BoolWithAggregatesFilter<"FreelancerApplication"> | boolean
    adminNotes?: StringNullableWithAggregatesFilter<"FreelancerApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FreelancerApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FreelancerApplication"> | Date | string
  }

  export type PaymentPlanConfigWhereInput = {
    AND?: PaymentPlanConfigWhereInput | PaymentPlanConfigWhereInput[]
    OR?: PaymentPlanConfigWhereInput[]
    NOT?: PaymentPlanConfigWhereInput | PaymentPlanConfigWhereInput[]
    id?: StringFilter<"PaymentPlanConfig"> | string
    planType?: EnumPaymentPlanFilter<"PaymentPlanConfig"> | $Enums.PaymentPlan
    hourlyRate?: FloatFilter<"PaymentPlanConfig"> | number
    equityPercentage?: FloatNullableFilter<"PaymentPlanConfig"> | number | null
    description?: StringFilter<"PaymentPlanConfig"> | string
    isActive?: BoolFilter<"PaymentPlanConfig"> | boolean
    createdAt?: DateTimeFilter<"PaymentPlanConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPlanConfig"> | Date | string
  }

  export type PaymentPlanConfigOrderByWithRelationInput = {
    id?: SortOrder
    planType?: SortOrder
    hourlyRate?: SortOrder
    equityPercentage?: SortOrderInput | SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planType?: $Enums.PaymentPlan
    AND?: PaymentPlanConfigWhereInput | PaymentPlanConfigWhereInput[]
    OR?: PaymentPlanConfigWhereInput[]
    NOT?: PaymentPlanConfigWhereInput | PaymentPlanConfigWhereInput[]
    hourlyRate?: FloatFilter<"PaymentPlanConfig"> | number
    equityPercentage?: FloatNullableFilter<"PaymentPlanConfig"> | number | null
    description?: StringFilter<"PaymentPlanConfig"> | string
    isActive?: BoolFilter<"PaymentPlanConfig"> | boolean
    createdAt?: DateTimeFilter<"PaymentPlanConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPlanConfig"> | Date | string
  }, "id" | "planType">

  export type PaymentPlanConfigOrderByWithAggregationInput = {
    id?: SortOrder
    planType?: SortOrder
    hourlyRate?: SortOrder
    equityPercentage?: SortOrderInput | SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentPlanConfigCountOrderByAggregateInput
    _avg?: PaymentPlanConfigAvgOrderByAggregateInput
    _max?: PaymentPlanConfigMaxOrderByAggregateInput
    _min?: PaymentPlanConfigMinOrderByAggregateInput
    _sum?: PaymentPlanConfigSumOrderByAggregateInput
  }

  export type PaymentPlanConfigScalarWhereWithAggregatesInput = {
    AND?: PaymentPlanConfigScalarWhereWithAggregatesInput | PaymentPlanConfigScalarWhereWithAggregatesInput[]
    OR?: PaymentPlanConfigScalarWhereWithAggregatesInput[]
    NOT?: PaymentPlanConfigScalarWhereWithAggregatesInput | PaymentPlanConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentPlanConfig"> | string
    planType?: EnumPaymentPlanWithAggregatesFilter<"PaymentPlanConfig"> | $Enums.PaymentPlan
    hourlyRate?: FloatWithAggregatesFilter<"PaymentPlanConfig"> | number
    equityPercentage?: FloatNullableWithAggregatesFilter<"PaymentPlanConfig"> | number | null
    description?: StringWithAggregatesFilter<"PaymentPlanConfig"> | string
    isActive?: BoolWithAggregatesFilter<"PaymentPlanConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentPlanConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentPlanConfig"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryCreateNestedManyWithoutFreelancerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectUncheckedCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutFreelancerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUncheckedUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientProjectsInput
    freelancer?: UserCreateNestedOneWithoutFreelancerProjectsInput
    timeEntries?: TimeEntryCreateNestedManyWithoutProjectInput
    messages?: MessageCreateNestedManyWithoutProjectInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    freelancerId?: string | null
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutProjectInput
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientProjectsNestedInput
    freelancer?: UserUpdateOneWithoutFreelancerProjectsNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutProjectNestedInput
    messages?: MessageUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutProjectNestedInput
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    freelancerId?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeEntryCreateInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTimeEntriesInput
    freelancer: UserCreateNestedOneWithoutTimeEntriesInput
  }

  export type TimeEntryUncheckedCreateInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    projectId: string
    freelancerId: string
  }

  export type TimeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTimeEntriesNestedInput
    freelancer?: UserUpdateOneRequiredWithoutTimeEntriesNestedInput
  }

  export type TimeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    freelancerId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeEntryCreateManyInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    projectId: string
    freelancerId: string
  }

  export type TimeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    freelancerId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    projectId: string
    senderId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    projectId: string
    senderId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneCreateInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type NDATemplateCreateInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutNdaTemplatesInput
    project?: ProjectCreateNestedOneWithoutNdaTemplateInput
  }

  export type NDATemplateUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    projectId?: string | null
  }

  export type NDATemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutNdaTemplatesNestedInput
    project?: ProjectUpdateOneWithoutNdaTemplateNestedInput
  }

  export type NDATemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NDATemplateCreateManyInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    projectId?: string | null
  }

  export type NDATemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDATemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SearchQueryCreateInput = {
    id?: string
    query: string
    results?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SearchQueryUncheckedCreateInput = {
    id?: string
    query: string
    results?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SearchQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryCreateManyInput = {
    id?: string
    query: string
    results?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SearchQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelancerApplicationCreateInput = {
    id?: string
    email: string
    name: string
    bio: string
    developerType: $Enums.DeveloperType
    portfolioUrl?: string | null
    resumeUrl?: string | null
    isApproved?: boolean
    isRejected?: boolean
    adminNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelancerApplicationUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    bio: string
    developerType: $Enums.DeveloperType
    portfolioUrl?: string | null
    resumeUrl?: string | null
    isApproved?: boolean
    isRejected?: boolean
    adminNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelancerApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    developerType?: EnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelancerApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    developerType?: EnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelancerApplicationCreateManyInput = {
    id?: string
    email: string
    name: string
    bio: string
    developerType: $Enums.DeveloperType
    portfolioUrl?: string | null
    resumeUrl?: string | null
    isApproved?: boolean
    isRejected?: boolean
    adminNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FreelancerApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    developerType?: EnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreelancerApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    developerType?: EnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPlanConfigCreateInput = {
    id?: string
    planType: $Enums.PaymentPlan
    hourlyRate: number
    equityPercentage?: number | null
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPlanConfigUncheckedCreateInput = {
    id?: string
    planType: $Enums.PaymentPlan
    hourlyRate: number
    equityPercentage?: number | null
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPlanConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPlanConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPlanConfigCreateManyInput = {
    id?: string
    planType: $Enums.PaymentPlan
    hourlyRate: number
    equityPercentage?: number | null
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPlanConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPlanConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumDeveloperTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeveloperTypeNullableFilter<$PrismaModel> | $Enums.DeveloperType | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TimeEntryListRelationFilter = {
    every?: TimeEntryWhereInput
    some?: TimeEntryWhereInput
    none?: TimeEntryWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type NDATemplateListRelationFilter = {
    every?: NDATemplateWhereInput
    some?: NDATemplateWhereInput
    none?: NDATemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NDATemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    stripeCustomerId?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    isVetted?: SortOrder
    hourlyRate?: SortOrder
    portfolioUrl?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    hourlyRate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    stripeCustomerId?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    isVetted?: SortOrder
    hourlyRate?: SortOrder
    portfolioUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyName?: SortOrder
    stripeCustomerId?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    isVetted?: SortOrder
    hourlyRate?: SortOrder
    portfolioUrl?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    hourlyRate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDeveloperTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeveloperTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeveloperType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeveloperTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDeveloperTypeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type EnumPaymentPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanFilter<$PrismaModel> | $Enums.PaymentPlan
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type NDATemplateNullableScalarRelationFilter = {
    is?: NDATemplateWhereInput | null
    isNot?: NDATemplateWhereInput | null
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentPlan?: SortOrder
    equityPercentage?: SortOrder
    totalBudget?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    freelancerId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    equityPercentage?: SortOrder
    totalBudget?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentPlan?: SortOrder
    equityPercentage?: SortOrder
    totalBudget?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    freelancerId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentPlan?: SortOrder
    equityPercentage?: SortOrder
    totalBudget?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    freelancerId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    equityPercentage?: SortOrder
    totalBudget?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EnumPaymentPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPlanFilter<$PrismaModel>
    _max?: NestedEnumPaymentPlanFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TimeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    hoursWorked?: SortOrder
    hourlyRate?: SortOrder
    totalAmount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    freelancerId?: SortOrder
  }

  export type TimeEntryAvgOrderByAggregateInput = {
    hoursWorked?: SortOrder
    hourlyRate?: SortOrder
    totalAmount?: SortOrder
  }

  export type TimeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    hoursWorked?: SortOrder
    hourlyRate?: SortOrder
    totalAmount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    freelancerId?: SortOrder
  }

  export type TimeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    hoursWorked?: SortOrder
    hourlyRate?: SortOrder
    totalAmount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    freelancerId?: SortOrder
  }

  export type TimeEntrySumOrderByAggregateInput = {
    hoursWorked?: SortOrder
    hourlyRate?: SortOrder
    totalAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type NDATemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    projectId?: SortOrder
  }

  export type NDATemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    projectId?: SortOrder
  }

  export type NDATemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    projectId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SearchQueryCountOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchQueryMinOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumDeveloperTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeveloperTypeFilter<$PrismaModel> | $Enums.DeveloperType
  }

  export type FreelancerApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    portfolioUrl?: SortOrder
    resumeUrl?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelancerApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    portfolioUrl?: SortOrder
    resumeUrl?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FreelancerApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    developerType?: SortOrder
    portfolioUrl?: SortOrder
    resumeUrl?: SortOrder
    isApproved?: SortOrder
    isRejected?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeveloperTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeveloperTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeveloperType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeveloperTypeFilter<$PrismaModel>
    _max?: NestedEnumDeveloperTypeFilter<$PrismaModel>
  }

  export type PaymentPlanConfigCountOrderByAggregateInput = {
    id?: SortOrder
    planType?: SortOrder
    hourlyRate?: SortOrder
    equityPercentage?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanConfigAvgOrderByAggregateInput = {
    hourlyRate?: SortOrder
    equityPercentage?: SortOrder
  }

  export type PaymentPlanConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    planType?: SortOrder
    hourlyRate?: SortOrder
    equityPercentage?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanConfigMinOrderByAggregateInput = {
    id?: SortOrder
    planType?: SortOrder
    hourlyRate?: SortOrder
    equityPercentage?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanConfigSumOrderByAggregateInput = {
    hourlyRate?: SortOrder
    equityPercentage?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<ProjectCreateWithoutFreelancerInput, ProjectUncheckedCreateWithoutFreelancerInput> | ProjectCreateWithoutFreelancerInput[] | ProjectUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutFreelancerInput | ProjectCreateOrConnectWithoutFreelancerInput[]
    createMany?: ProjectCreateManyFreelancerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TimeEntryCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<TimeEntryCreateWithoutFreelancerInput, TimeEntryUncheckedCreateWithoutFreelancerInput> | TimeEntryCreateWithoutFreelancerInput[] | TimeEntryUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutFreelancerInput | TimeEntryCreateOrConnectWithoutFreelancerInput[]
    createMany?: TimeEntryCreateManyFreelancerInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NDATemplateCreateNestedManyWithoutClientInput = {
    create?: XOR<NDATemplateCreateWithoutClientInput, NDATemplateUncheckedCreateWithoutClientInput> | NDATemplateCreateWithoutClientInput[] | NDATemplateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NDATemplateCreateOrConnectWithoutClientInput | NDATemplateCreateOrConnectWithoutClientInput[]
    createMany?: NDATemplateCreateManyClientInputEnvelope
    connect?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<ProjectCreateWithoutFreelancerInput, ProjectUncheckedCreateWithoutFreelancerInput> | ProjectCreateWithoutFreelancerInput[] | ProjectUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutFreelancerInput | ProjectCreateOrConnectWithoutFreelancerInput[]
    createMany?: ProjectCreateManyFreelancerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TimeEntryUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: XOR<TimeEntryCreateWithoutFreelancerInput, TimeEntryUncheckedCreateWithoutFreelancerInput> | TimeEntryCreateWithoutFreelancerInput[] | TimeEntryUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutFreelancerInput | TimeEntryCreateOrConnectWithoutFreelancerInput[]
    createMany?: TimeEntryCreateManyFreelancerInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NDATemplateUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<NDATemplateCreateWithoutClientInput, NDATemplateUncheckedCreateWithoutClientInput> | NDATemplateCreateWithoutClientInput[] | NDATemplateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NDATemplateCreateOrConnectWithoutClientInput | NDATemplateCreateOrConnectWithoutClientInput[]
    createMany?: NDATemplateCreateManyClientInputEnvelope
    connect?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumDeveloperTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeveloperType | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<ProjectCreateWithoutFreelancerInput, ProjectUncheckedCreateWithoutFreelancerInput> | ProjectCreateWithoutFreelancerInput[] | ProjectUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutFreelancerInput | ProjectCreateOrConnectWithoutFreelancerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutFreelancerInput | ProjectUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: ProjectCreateManyFreelancerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutFreelancerInput | ProjectUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutFreelancerInput | ProjectUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TimeEntryUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<TimeEntryCreateWithoutFreelancerInput, TimeEntryUncheckedCreateWithoutFreelancerInput> | TimeEntryCreateWithoutFreelancerInput[] | TimeEntryUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutFreelancerInput | TimeEntryCreateOrConnectWithoutFreelancerInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutFreelancerInput | TimeEntryUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: TimeEntryCreateManyFreelancerInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutFreelancerInput | TimeEntryUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutFreelancerInput | TimeEntryUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NDATemplateUpdateManyWithoutClientNestedInput = {
    create?: XOR<NDATemplateCreateWithoutClientInput, NDATemplateUncheckedCreateWithoutClientInput> | NDATemplateCreateWithoutClientInput[] | NDATemplateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NDATemplateCreateOrConnectWithoutClientInput | NDATemplateCreateOrConnectWithoutClientInput[]
    upsert?: NDATemplateUpsertWithWhereUniqueWithoutClientInput | NDATemplateUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NDATemplateCreateManyClientInputEnvelope
    set?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    disconnect?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    delete?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    connect?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    update?: NDATemplateUpdateWithWhereUniqueWithoutClientInput | NDATemplateUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NDATemplateUpdateManyWithWhereWithoutClientInput | NDATemplateUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NDATemplateScalarWhereInput | NDATemplateScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<ProjectCreateWithoutFreelancerInput, ProjectUncheckedCreateWithoutFreelancerInput> | ProjectCreateWithoutFreelancerInput[] | ProjectUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutFreelancerInput | ProjectCreateOrConnectWithoutFreelancerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutFreelancerInput | ProjectUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: ProjectCreateManyFreelancerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutFreelancerInput | ProjectUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutFreelancerInput | ProjectUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TimeEntryUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: XOR<TimeEntryCreateWithoutFreelancerInput, TimeEntryUncheckedCreateWithoutFreelancerInput> | TimeEntryCreateWithoutFreelancerInput[] | TimeEntryUncheckedCreateWithoutFreelancerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutFreelancerInput | TimeEntryCreateOrConnectWithoutFreelancerInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutFreelancerInput | TimeEntryUpsertWithWhereUniqueWithoutFreelancerInput[]
    createMany?: TimeEntryCreateManyFreelancerInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutFreelancerInput | TimeEntryUpdateWithWhereUniqueWithoutFreelancerInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutFreelancerInput | TimeEntryUpdateManyWithWhereWithoutFreelancerInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NDATemplateUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<NDATemplateCreateWithoutClientInput, NDATemplateUncheckedCreateWithoutClientInput> | NDATemplateCreateWithoutClientInput[] | NDATemplateUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NDATemplateCreateOrConnectWithoutClientInput | NDATemplateCreateOrConnectWithoutClientInput[]
    upsert?: NDATemplateUpsertWithWhereUniqueWithoutClientInput | NDATemplateUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NDATemplateCreateManyClientInputEnvelope
    set?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    disconnect?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    delete?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    connect?: NDATemplateWhereUniqueInput | NDATemplateWhereUniqueInput[]
    update?: NDATemplateUpdateWithWhereUniqueWithoutClientInput | NDATemplateUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NDATemplateUpdateManyWithWhereWithoutClientInput | NDATemplateUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NDATemplateScalarWhereInput | NDATemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientProjectsInput = {
    create?: XOR<UserCreateWithoutClientProjectsInput, UserUncheckedCreateWithoutClientProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFreelancerProjectsInput = {
    create?: XOR<UserCreateWithoutFreelancerProjectsInput, UserUncheckedCreateWithoutFreelancerProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFreelancerProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TimeEntryCreateNestedManyWithoutProjectInput = {
    create?: XOR<TimeEntryCreateWithoutProjectInput, TimeEntryUncheckedCreateWithoutProjectInput> | TimeEntryCreateWithoutProjectInput[] | TimeEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutProjectInput | TimeEntryCreateOrConnectWithoutProjectInput[]
    createMany?: TimeEntryCreateManyProjectInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutProjectInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MilestoneCreateNestedManyWithoutProjectInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type NDATemplateCreateNestedOneWithoutProjectInput = {
    create?: XOR<NDATemplateCreateWithoutProjectInput, NDATemplateUncheckedCreateWithoutProjectInput>
    connectOrCreate?: NDATemplateCreateOrConnectWithoutProjectInput
    connect?: NDATemplateWhereUniqueInput
  }

  export type TimeEntryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TimeEntryCreateWithoutProjectInput, TimeEntryUncheckedCreateWithoutProjectInput> | TimeEntryCreateWithoutProjectInput[] | TimeEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutProjectInput | TimeEntryCreateOrConnectWithoutProjectInput[]
    createMany?: TimeEntryCreateManyProjectInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type NDATemplateUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<NDATemplateCreateWithoutProjectInput, NDATemplateUncheckedCreateWithoutProjectInput>
    connectOrCreate?: NDATemplateCreateOrConnectWithoutProjectInput
    connect?: NDATemplateWhereUniqueInput
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type EnumPaymentPlanFieldUpdateOperationsInput = {
    set?: $Enums.PaymentPlan
  }

  export type UserUpdateOneRequiredWithoutClientProjectsNestedInput = {
    create?: XOR<UserCreateWithoutClientProjectsInput, UserUncheckedCreateWithoutClientProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientProjectsInput
    upsert?: UserUpsertWithoutClientProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientProjectsInput, UserUpdateWithoutClientProjectsInput>, UserUncheckedUpdateWithoutClientProjectsInput>
  }

  export type UserUpdateOneWithoutFreelancerProjectsNestedInput = {
    create?: XOR<UserCreateWithoutFreelancerProjectsInput, UserUncheckedCreateWithoutFreelancerProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFreelancerProjectsInput
    upsert?: UserUpsertWithoutFreelancerProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFreelancerProjectsInput, UserUpdateWithoutFreelancerProjectsInput>, UserUncheckedUpdateWithoutFreelancerProjectsInput>
  }

  export type TimeEntryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TimeEntryCreateWithoutProjectInput, TimeEntryUncheckedCreateWithoutProjectInput> | TimeEntryCreateWithoutProjectInput[] | TimeEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutProjectInput | TimeEntryCreateOrConnectWithoutProjectInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutProjectInput | TimeEntryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TimeEntryCreateManyProjectInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutProjectInput | TimeEntryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutProjectInput | TimeEntryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutProjectInput | MessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutProjectInput | MessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutProjectInput | MessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MilestoneUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutProjectInput | MilestoneUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutProjectInput | MilestoneUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutProjectInput | MilestoneUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type NDATemplateUpdateOneWithoutProjectNestedInput = {
    create?: XOR<NDATemplateCreateWithoutProjectInput, NDATemplateUncheckedCreateWithoutProjectInput>
    connectOrCreate?: NDATemplateCreateOrConnectWithoutProjectInput
    upsert?: NDATemplateUpsertWithoutProjectInput
    disconnect?: NDATemplateWhereInput | boolean
    delete?: NDATemplateWhereInput | boolean
    connect?: NDATemplateWhereUniqueInput
    update?: XOR<XOR<NDATemplateUpdateToOneWithWhereWithoutProjectInput, NDATemplateUpdateWithoutProjectInput>, NDATemplateUncheckedUpdateWithoutProjectInput>
  }

  export type TimeEntryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TimeEntryCreateWithoutProjectInput, TimeEntryUncheckedCreateWithoutProjectInput> | TimeEntryCreateWithoutProjectInput[] | TimeEntryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutProjectInput | TimeEntryCreateOrConnectWithoutProjectInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutProjectInput | TimeEntryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TimeEntryCreateManyProjectInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutProjectInput | TimeEntryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutProjectInput | TimeEntryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput> | MessageCreateWithoutProjectInput[] | MessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProjectInput | MessageCreateOrConnectWithoutProjectInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutProjectInput | MessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MessageCreateManyProjectInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutProjectInput | MessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutProjectInput | MessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput> | MilestoneCreateWithoutProjectInput[] | MilestoneUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutProjectInput | MilestoneCreateOrConnectWithoutProjectInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutProjectInput | MilestoneUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MilestoneCreateManyProjectInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutProjectInput | MilestoneUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutProjectInput | MilestoneUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type NDATemplateUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<NDATemplateCreateWithoutProjectInput, NDATemplateUncheckedCreateWithoutProjectInput>
    connectOrCreate?: NDATemplateCreateOrConnectWithoutProjectInput
    upsert?: NDATemplateUpsertWithoutProjectInput
    disconnect?: NDATemplateWhereInput | boolean
    delete?: NDATemplateWhereInput | boolean
    connect?: NDATemplateWhereUniqueInput
    update?: XOR<XOR<NDATemplateUpdateToOneWithWhereWithoutProjectInput, NDATemplateUpdateWithoutProjectInput>, NDATemplateUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCreateNestedOneWithoutTimeEntriesInput = {
    create?: XOR<ProjectCreateWithoutTimeEntriesInput, ProjectUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTimeEntriesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTimeEntriesInput = {
    create?: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutTimeEntriesNestedInput = {
    create?: XOR<ProjectCreateWithoutTimeEntriesInput, ProjectUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTimeEntriesInput
    upsert?: ProjectUpsertWithoutTimeEntriesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTimeEntriesInput, ProjectUpdateWithoutTimeEntriesInput>, ProjectUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutTimeEntriesNestedInput = {
    create?: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeEntriesInput
    upsert?: UserUpsertWithoutTimeEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeEntriesInput, UserUpdateWithoutTimeEntriesInput>, UserUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type ProjectCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMessagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type ProjectUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMessagesInput
    upsert?: ProjectUpsertWithoutMessagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMessagesInput, ProjectUpdateWithoutMessagesInput>, ProjectUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ProjectCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMilestonesInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMilestonesInput
    upsert?: ProjectUpsertWithoutMilestonesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMilestonesInput, ProjectUpdateWithoutMilestonesInput>, ProjectUncheckedUpdateWithoutMilestonesInput>
  }

  export type UserCreateNestedOneWithoutNdaTemplatesInput = {
    create?: XOR<UserCreateWithoutNdaTemplatesInput, UserUncheckedCreateWithoutNdaTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNdaTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutNdaTemplateInput = {
    create?: XOR<ProjectCreateWithoutNdaTemplateInput, ProjectUncheckedCreateWithoutNdaTemplateInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutNdaTemplateInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNdaTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutNdaTemplatesInput, UserUncheckedCreateWithoutNdaTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNdaTemplatesInput
    upsert?: UserUpsertWithoutNdaTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNdaTemplatesInput, UserUpdateWithoutNdaTemplatesInput>, UserUncheckedUpdateWithoutNdaTemplatesInput>
  }

  export type ProjectUpdateOneWithoutNdaTemplateNestedInput = {
    create?: XOR<ProjectCreateWithoutNdaTemplateInput, ProjectUncheckedCreateWithoutNdaTemplateInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutNdaTemplateInput
    upsert?: ProjectUpsertWithoutNdaTemplateInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutNdaTemplateInput, ProjectUpdateWithoutNdaTemplateInput>, ProjectUncheckedUpdateWithoutNdaTemplateInput>
  }

  export type EnumDeveloperTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeveloperType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumDeveloperTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeveloperTypeNullableFilter<$PrismaModel> | $Enums.DeveloperType | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDeveloperTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeveloperTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeveloperType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeveloperTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDeveloperTypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumPaymentPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanFilter<$PrismaModel> | $Enums.PaymentPlan
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPlanFilter<$PrismaModel>
    _max?: NestedEnumPaymentPlanFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDeveloperTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeveloperTypeFilter<$PrismaModel> | $Enums.DeveloperType
  }

  export type NestedEnumDeveloperTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeveloperType | EnumDeveloperTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeveloperType[] | ListEnumDeveloperTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeveloperTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeveloperType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeveloperTypeFilter<$PrismaModel>
    _max?: NestedEnumDeveloperTypeFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutClientInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancer?: UserCreateNestedOneWithoutFreelancerProjectsInput
    timeEntries?: TimeEntryCreateNestedManyWithoutProjectInput
    messages?: MessageCreateNestedManyWithoutProjectInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutClientInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancerId?: string | null
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutProjectInput
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutClientInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectCreateManyClientInputEnvelope = {
    data: ProjectCreateManyClientInput | ProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutFreelancerInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientProjectsInput
    timeEntries?: TimeEntryCreateNestedManyWithoutProjectInput
    messages?: MessageCreateNestedManyWithoutProjectInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFreelancerInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutProjectInput
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFreelancerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFreelancerInput, ProjectUncheckedCreateWithoutFreelancerInput>
  }

  export type ProjectCreateManyFreelancerInputEnvelope = {
    data: ProjectCreateManyFreelancerInput | ProjectCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type TimeEntryCreateWithoutFreelancerInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTimeEntriesInput
  }

  export type TimeEntryUncheckedCreateWithoutFreelancerInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    projectId: string
  }

  export type TimeEntryCreateOrConnectWithoutFreelancerInput = {
    where: TimeEntryWhereUniqueInput
    create: XOR<TimeEntryCreateWithoutFreelancerInput, TimeEntryUncheckedCreateWithoutFreelancerInput>
  }

  export type TimeEntryCreateManyFreelancerInputEnvelope = {
    data: TimeEntryCreateManyFreelancerInput | TimeEntryCreateManyFreelancerInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    projectId: string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type NDATemplateCreateWithoutClientInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectCreateNestedOneWithoutNdaTemplateInput
  }

  export type NDATemplateUncheckedCreateWithoutClientInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
  }

  export type NDATemplateCreateOrConnectWithoutClientInput = {
    where: NDATemplateWhereUniqueInput
    create: XOR<NDATemplateCreateWithoutClientInput, NDATemplateUncheckedCreateWithoutClientInput>
  }

  export type NDATemplateCreateManyClientInputEnvelope = {
    data: NDATemplateCreateManyClientInput | NDATemplateCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
  }

  export type ProjectUpdateManyWithWhereWithoutClientInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFilter<"Project"> | $Enums.PaymentPlan
    equityPercentage?: FloatNullableFilter<"Project"> | number | null
    totalBudget?: FloatNullableFilter<"Project"> | number | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    clientId?: StringFilter<"Project"> | string
    freelancerId?: StringNullableFilter<"Project"> | string | null
  }

  export type ProjectUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutFreelancerInput, ProjectUncheckedUpdateWithoutFreelancerInput>
    create: XOR<ProjectCreateWithoutFreelancerInput, ProjectUncheckedCreateWithoutFreelancerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutFreelancerInput, ProjectUncheckedUpdateWithoutFreelancerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutFreelancerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type TimeEntryUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: TimeEntryWhereUniqueInput
    update: XOR<TimeEntryUpdateWithoutFreelancerInput, TimeEntryUncheckedUpdateWithoutFreelancerInput>
    create: XOR<TimeEntryCreateWithoutFreelancerInput, TimeEntryUncheckedCreateWithoutFreelancerInput>
  }

  export type TimeEntryUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: TimeEntryWhereUniqueInput
    data: XOR<TimeEntryUpdateWithoutFreelancerInput, TimeEntryUncheckedUpdateWithoutFreelancerInput>
  }

  export type TimeEntryUpdateManyWithWhereWithoutFreelancerInput = {
    where: TimeEntryScalarWhereInput
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyWithoutFreelancerInput>
  }

  export type TimeEntryScalarWhereInput = {
    AND?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
    OR?: TimeEntryScalarWhereInput[]
    NOT?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
    id?: StringFilter<"TimeEntry"> | string
    description?: StringNullableFilter<"TimeEntry"> | string | null
    hoursWorked?: FloatFilter<"TimeEntry"> | number
    hourlyRate?: FloatFilter<"TimeEntry"> | number
    totalAmount?: FloatFilter<"TimeEntry"> | number
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    projectId?: StringFilter<"TimeEntry"> | string
    freelancerId?: StringFilter<"TimeEntry"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    fileUrl?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    projectId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
  }

  export type NDATemplateUpsertWithWhereUniqueWithoutClientInput = {
    where: NDATemplateWhereUniqueInput
    update: XOR<NDATemplateUpdateWithoutClientInput, NDATemplateUncheckedUpdateWithoutClientInput>
    create: XOR<NDATemplateCreateWithoutClientInput, NDATemplateUncheckedCreateWithoutClientInput>
  }

  export type NDATemplateUpdateWithWhereUniqueWithoutClientInput = {
    where: NDATemplateWhereUniqueInput
    data: XOR<NDATemplateUpdateWithoutClientInput, NDATemplateUncheckedUpdateWithoutClientInput>
  }

  export type NDATemplateUpdateManyWithWhereWithoutClientInput = {
    where: NDATemplateScalarWhereInput
    data: XOR<NDATemplateUpdateManyMutationInput, NDATemplateUncheckedUpdateManyWithoutClientInput>
  }

  export type NDATemplateScalarWhereInput = {
    AND?: NDATemplateScalarWhereInput | NDATemplateScalarWhereInput[]
    OR?: NDATemplateScalarWhereInput[]
    NOT?: NDATemplateScalarWhereInput | NDATemplateScalarWhereInput[]
    id?: StringFilter<"NDATemplate"> | string
    title?: StringFilter<"NDATemplate"> | string
    content?: StringFilter<"NDATemplate"> | string
    isActive?: BoolFilter<"NDATemplate"> | boolean
    createdAt?: DateTimeFilter<"NDATemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NDATemplate"> | Date | string
    clientId?: StringFilter<"NDATemplate"> | string
    projectId?: StringNullableFilter<"NDATemplate"> | string | null
  }

  export type UserCreateWithoutClientProjectsInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    freelancerProjects?: ProjectCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryCreateNestedManyWithoutFreelancerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutClientProjectsInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    freelancerProjects?: ProjectUncheckedCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutFreelancerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutClientProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientProjectsInput, UserUncheckedCreateWithoutClientProjectsInput>
  }

  export type UserCreateWithoutFreelancerProjectsInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectCreateNestedManyWithoutClientInput
    timeEntries?: TimeEntryCreateNestedManyWithoutFreelancerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutFreelancerProjectsInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutFreelancerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutFreelancerProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFreelancerProjectsInput, UserUncheckedCreateWithoutFreelancerProjectsInput>
  }

  export type TimeEntryCreateWithoutProjectInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    freelancer: UserCreateNestedOneWithoutTimeEntriesInput
  }

  export type TimeEntryUncheckedCreateWithoutProjectInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    freelancerId: string
  }

  export type TimeEntryCreateOrConnectWithoutProjectInput = {
    where: TimeEntryWhereUniqueInput
    create: XOR<TimeEntryCreateWithoutProjectInput, TimeEntryUncheckedCreateWithoutProjectInput>
  }

  export type TimeEntryCreateManyProjectInputEnvelope = {
    data: TimeEntryCreateManyProjectInput | TimeEntryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutProjectInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutProjectInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    senderId: string
  }

  export type MessageCreateOrConnectWithoutProjectInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput>
  }

  export type MessageCreateManyProjectInputEnvelope = {
    data: MessageCreateManyProjectInput | MessageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneCreateOrConnectWithoutProjectInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput>
  }

  export type MilestoneCreateManyProjectInputEnvelope = {
    data: MilestoneCreateManyProjectInput | MilestoneCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type NDATemplateCreateWithoutProjectInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutNdaTemplatesInput
  }

  export type NDATemplateUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
  }

  export type NDATemplateCreateOrConnectWithoutProjectInput = {
    where: NDATemplateWhereUniqueInput
    create: XOR<NDATemplateCreateWithoutProjectInput, NDATemplateUncheckedCreateWithoutProjectInput>
  }

  export type UserUpsertWithoutClientProjectsInput = {
    update: XOR<UserUpdateWithoutClientProjectsInput, UserUncheckedUpdateWithoutClientProjectsInput>
    create: XOR<UserCreateWithoutClientProjectsInput, UserUncheckedCreateWithoutClientProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientProjectsInput, UserUncheckedUpdateWithoutClientProjectsInput>
  }

  export type UserUpdateWithoutClientProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    freelancerProjects?: ProjectUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutClientProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    freelancerProjects?: ProjectUncheckedUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutFreelancerProjectsInput = {
    update: XOR<UserUpdateWithoutFreelancerProjectsInput, UserUncheckedUpdateWithoutFreelancerProjectsInput>
    create: XOR<UserCreateWithoutFreelancerProjectsInput, UserUncheckedCreateWithoutFreelancerProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFreelancerProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFreelancerProjectsInput, UserUncheckedUpdateWithoutFreelancerProjectsInput>
  }

  export type UserUpdateWithoutFreelancerProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUpdateManyWithoutClientNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutFreelancerProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type TimeEntryUpsertWithWhereUniqueWithoutProjectInput = {
    where: TimeEntryWhereUniqueInput
    update: XOR<TimeEntryUpdateWithoutProjectInput, TimeEntryUncheckedUpdateWithoutProjectInput>
    create: XOR<TimeEntryCreateWithoutProjectInput, TimeEntryUncheckedCreateWithoutProjectInput>
  }

  export type TimeEntryUpdateWithWhereUniqueWithoutProjectInput = {
    where: TimeEntryWhereUniqueInput
    data: XOR<TimeEntryUpdateWithoutProjectInput, TimeEntryUncheckedUpdateWithoutProjectInput>
  }

  export type TimeEntryUpdateManyWithWhereWithoutProjectInput = {
    where: TimeEntryScalarWhereInput
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyWithoutProjectInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutProjectInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutProjectInput, MessageUncheckedUpdateWithoutProjectInput>
    create: XOR<MessageCreateWithoutProjectInput, MessageUncheckedCreateWithoutProjectInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutProjectInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutProjectInput, MessageUncheckedUpdateWithoutProjectInput>
  }

  export type MessageUpdateManyWithWhereWithoutProjectInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutProjectInput>
  }

  export type MilestoneUpsertWithWhereUniqueWithoutProjectInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutProjectInput, MilestoneUncheckedUpdateWithoutProjectInput>
    create: XOR<MilestoneCreateWithoutProjectInput, MilestoneUncheckedCreateWithoutProjectInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutProjectInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutProjectInput, MilestoneUncheckedUpdateWithoutProjectInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutProjectInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutProjectInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    isCompleted?: BoolFilter<"Milestone"> | boolean
    dueDate?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    projectId?: StringFilter<"Milestone"> | string
  }

  export type NDATemplateUpsertWithoutProjectInput = {
    update: XOR<NDATemplateUpdateWithoutProjectInput, NDATemplateUncheckedUpdateWithoutProjectInput>
    create: XOR<NDATemplateCreateWithoutProjectInput, NDATemplateUncheckedCreateWithoutProjectInput>
    where?: NDATemplateWhereInput
  }

  export type NDATemplateUpdateToOneWithWhereWithoutProjectInput = {
    where?: NDATemplateWhereInput
    data: XOR<NDATemplateUpdateWithoutProjectInput, NDATemplateUncheckedUpdateWithoutProjectInput>
  }

  export type NDATemplateUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutNdaTemplatesNestedInput
  }

  export type NDATemplateUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateWithoutTimeEntriesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientProjectsInput
    freelancer?: UserCreateNestedOneWithoutFreelancerProjectsInput
    messages?: MessageCreateNestedManyWithoutProjectInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTimeEntriesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    freelancerId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTimeEntriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTimeEntriesInput, ProjectUncheckedCreateWithoutTimeEntriesInput>
  }

  export type UserCreateWithoutTimeEntriesInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectCreateNestedManyWithoutFreelancerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutTimeEntriesInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectUncheckedCreateNestedManyWithoutFreelancerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ndaTemplates?: NDATemplateUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutTimeEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
  }

  export type ProjectUpsertWithoutTimeEntriesInput = {
    update: XOR<ProjectUpdateWithoutTimeEntriesInput, ProjectUncheckedUpdateWithoutTimeEntriesInput>
    create: XOR<ProjectCreateWithoutTimeEntriesInput, ProjectUncheckedCreateWithoutTimeEntriesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTimeEntriesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTimeEntriesInput, ProjectUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type ProjectUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientProjectsNestedInput
    freelancer?: UserUpdateOneWithoutFreelancerProjectsNestedInput
    messages?: MessageUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type UserUpsertWithoutTimeEntriesInput = {
    update: XOR<UserUpdateWithoutTimeEntriesInput, UserUncheckedUpdateWithoutTimeEntriesInput>
    create: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeEntriesInput, UserUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type UserUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUncheckedUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ndaTemplates?: NDATemplateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProjectCreateWithoutMessagesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientProjectsInput
    freelancer?: UserCreateNestedOneWithoutFreelancerProjectsInput
    timeEntries?: TimeEntryCreateNestedManyWithoutProjectInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMessagesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    freelancerId?: string | null
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutProjectInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMessagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryCreateNestedManyWithoutFreelancerInput
    ndaTemplates?: NDATemplateCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectUncheckedCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutFreelancerInput
    ndaTemplates?: NDATemplateUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ProjectUpsertWithoutMessagesInput = {
    update: XOR<ProjectUpdateWithoutMessagesInput, ProjectUncheckedUpdateWithoutMessagesInput>
    create: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMessagesInput, ProjectUncheckedUpdateWithoutMessagesInput>
  }

  export type ProjectUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientProjectsNestedInput
    freelancer?: UserUpdateOneWithoutFreelancerProjectsNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutFreelancerNestedInput
    ndaTemplates?: NDATemplateUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUncheckedUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutFreelancerNestedInput
    ndaTemplates?: NDATemplateUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProjectCreateWithoutMilestonesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientProjectsInput
    freelancer?: UserCreateNestedOneWithoutFreelancerProjectsInput
    timeEntries?: TimeEntryCreateNestedManyWithoutProjectInput
    messages?: MessageCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMilestonesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    freelancerId?: string | null
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutProjectInput
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    ndaTemplate?: NDATemplateUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMilestonesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
  }

  export type ProjectUpsertWithoutMilestonesInput = {
    update: XOR<ProjectUpdateWithoutMilestonesInput, ProjectUncheckedUpdateWithoutMilestonesInput>
    create: XOR<ProjectCreateWithoutMilestonesInput, ProjectUncheckedCreateWithoutMilestonesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMilestonesInput, ProjectUncheckedUpdateWithoutMilestonesInput>
  }

  export type ProjectUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientProjectsNestedInput
    freelancer?: UserUpdateOneWithoutFreelancerProjectsNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutProjectNestedInput
    messages?: MessageUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutProjectNestedInput
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type UserCreateWithoutNdaTemplatesInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryCreateNestedManyWithoutFreelancerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutNdaTemplatesInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyName?: string | null
    stripeCustomerId?: string | null
    bio?: string | null
    developerType?: $Enums.DeveloperType | null
    isVetted?: boolean
    hourlyRate?: number | null
    portfolioUrl?: string | null
    clientProjects?: ProjectUncheckedCreateNestedManyWithoutClientInput
    freelancerProjects?: ProjectUncheckedCreateNestedManyWithoutFreelancerInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutFreelancerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutNdaTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNdaTemplatesInput, UserUncheckedCreateWithoutNdaTemplatesInput>
  }

  export type ProjectCreateWithoutNdaTemplateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientProjectsInput
    freelancer?: UserCreateNestedOneWithoutFreelancerProjectsInput
    timeEntries?: TimeEntryCreateNestedManyWithoutProjectInput
    messages?: MessageCreateNestedManyWithoutProjectInput
    milestones?: MilestoneCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutNdaTemplateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    freelancerId?: string | null
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutProjectInput
    messages?: MessageUncheckedCreateNestedManyWithoutProjectInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutNdaTemplateInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutNdaTemplateInput, ProjectUncheckedCreateWithoutNdaTemplateInput>
  }

  export type UserUpsertWithoutNdaTemplatesInput = {
    update: XOR<UserUpdateWithoutNdaTemplatesInput, UserUncheckedUpdateWithoutNdaTemplatesInput>
    create: XOR<UserCreateWithoutNdaTemplatesInput, UserUncheckedCreateWithoutNdaTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNdaTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNdaTemplatesInput, UserUncheckedUpdateWithoutNdaTemplatesInput>
  }

  export type UserUpdateWithoutNdaTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutNdaTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    developerType?: NullableEnumDeveloperTypeFieldUpdateOperationsInput | $Enums.DeveloperType | null
    isVetted?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    clientProjects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
    freelancerProjects?: ProjectUncheckedUpdateManyWithoutFreelancerNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutFreelancerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ProjectUpsertWithoutNdaTemplateInput = {
    update: XOR<ProjectUpdateWithoutNdaTemplateInput, ProjectUncheckedUpdateWithoutNdaTemplateInput>
    create: XOR<ProjectCreateWithoutNdaTemplateInput, ProjectUncheckedCreateWithoutNdaTemplateInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutNdaTemplateInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutNdaTemplateInput, ProjectUncheckedUpdateWithoutNdaTemplateInput>
  }

  export type ProjectUpdateWithoutNdaTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientProjectsNestedInput
    freelancer?: UserUpdateOneWithoutFreelancerProjectsNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutProjectNestedInput
    messages?: MessageUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutNdaTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutProjectNestedInput
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyClientInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    freelancerId?: string | null
  }

  export type ProjectCreateManyFreelancerInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.ProjectStatus
    paymentPlan: $Enums.PaymentPlan
    equityPercentage?: number | null
    totalBudget?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
  }

  export type TimeEntryCreateManyFreelancerInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    projectId: string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    projectId: string
  }

  export type NDATemplateCreateManyClientInput = {
    id?: string
    title: string
    content: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
  }

  export type ProjectUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancer?: UserUpdateOneWithoutFreelancerProjectsNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutProjectNestedInput
    messages?: MessageUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutProjectNestedInput
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientProjectsNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutProjectNestedInput
    messages?: MessageUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutProjectNestedInput
    messages?: MessageUncheckedUpdateManyWithoutProjectNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutProjectNestedInput
    ndaTemplate?: NDATemplateUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    equityPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeEntryUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTimeEntriesNestedInput
  }

  export type TimeEntryUncheckedUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeEntryUncheckedUpdateManyWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type NDATemplateUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutNdaTemplateNestedInput
  }

  export type NDATemplateUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NDATemplateUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeEntryCreateManyProjectInput = {
    id?: string
    description?: string | null
    hoursWorked: number
    hourlyRate: number
    totalAmount: number
    date?: Date | string
    createdAt?: Date | string
    freelancerId: string
  }

  export type MessageCreateManyProjectInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    fileUrl?: string | null
    createdAt?: Date | string
    senderId: string
  }

  export type MilestoneCreateManyProjectInput = {
    id?: string
    title: string
    description?: string | null
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeEntryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancer?: UserUpdateOneRequiredWithoutTimeEntriesNestedInput
  }

  export type TimeEntryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeEntryUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    freelancerId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}