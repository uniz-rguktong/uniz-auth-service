
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
 * Model AuthCredential
 * 
 */
export type AuthCredential = $Result.DefaultSelection<Prisma.$AuthCredentialPayload>
/**
 * Model OtpLog
 * 
 */
export type OtpLog = $Result.DefaultSelection<Prisma.$OtpLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuthCredentials
 * const authCredentials = await prisma.authCredential.findMany()
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
   * // Fetch zero or more AuthCredentials
   * const authCredentials = await prisma.authCredential.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.authCredential`: Exposes CRUD operations for the **AuthCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthCredentials
    * const authCredentials = await prisma.authCredential.findMany()
    * ```
    */
  get authCredential(): Prisma.AuthCredentialDelegate<ExtArgs>;

  /**
   * `prisma.otpLog`: Exposes CRUD operations for the **OtpLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpLogs
    * const otpLogs = await prisma.otpLog.findMany()
    * ```
    */
  get otpLog(): Prisma.OtpLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    AuthCredential: 'AuthCredential',
    OtpLog: 'OtpLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "authCredential" | "otpLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuthCredential: {
        payload: Prisma.$AuthCredentialPayload<ExtArgs>
        fields: Prisma.AuthCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>
          }
          findFirst: {
            args: Prisma.AuthCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>
          }
          findMany: {
            args: Prisma.AuthCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>[]
          }
          create: {
            args: Prisma.AuthCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>
          }
          createMany: {
            args: Prisma.AuthCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>[]
          }
          delete: {
            args: Prisma.AuthCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>
          }
          update: {
            args: Prisma.AuthCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>
          }
          deleteMany: {
            args: Prisma.AuthCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCredentialPayload>
          }
          aggregate: {
            args: Prisma.AuthCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthCredential>
          }
          groupBy: {
            args: Prisma.AuthCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCredentialCountAggregateOutputType> | number
          }
        }
      }
      OtpLog: {
        payload: Prisma.$OtpLogPayload<ExtArgs>
        fields: Prisma.OtpLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          findFirst: {
            args: Prisma.OtpLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          findMany: {
            args: Prisma.OtpLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>[]
          }
          create: {
            args: Prisma.OtpLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          createMany: {
            args: Prisma.OtpLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>[]
          }
          delete: {
            args: Prisma.OtpLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          update: {
            args: Prisma.OtpLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          deleteMany: {
            args: Prisma.OtpLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          aggregate: {
            args: Prisma.OtpLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpLog>
          }
          groupBy: {
            args: Prisma.OtpLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpLogCountArgs<ExtArgs>
            result: $Utils.Optional<OtpLogCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model AuthCredential
   */

  export type AggregateAuthCredential = {
    _count: AuthCredentialCountAggregateOutputType | null
    _min: AuthCredentialMinAggregateOutputType | null
    _max: AuthCredentialMaxAggregateOutputType | null
  }

  export type AuthCredentialMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDisabled: boolean | null
  }

  export type AuthCredentialMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDisabled: boolean | null
  }

  export type AuthCredentialCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    isDisabled: number
    _all: number
  }


  export type AuthCredentialMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isDisabled?: true
  }

  export type AuthCredentialMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isDisabled?: true
  }

  export type AuthCredentialCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isDisabled?: true
    _all?: true
  }

  export type AuthCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthCredential to aggregate.
     */
    where?: AuthCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCredentials to fetch.
     */
    orderBy?: AuthCredentialOrderByWithRelationInput | AuthCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthCredentials
    **/
    _count?: true | AuthCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthCredentialMaxAggregateInputType
  }

  export type GetAuthCredentialAggregateType<T extends AuthCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthCredential[P]>
      : GetScalarType<T[P], AggregateAuthCredential[P]>
  }




  export type AuthCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthCredentialWhereInput
    orderBy?: AuthCredentialOrderByWithAggregationInput | AuthCredentialOrderByWithAggregationInput[]
    by: AuthCredentialScalarFieldEnum[] | AuthCredentialScalarFieldEnum
    having?: AuthCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCredentialCountAggregateInputType | true
    _min?: AuthCredentialMinAggregateInputType
    _max?: AuthCredentialMaxAggregateInputType
  }

  export type AuthCredentialGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    role: string
    createdAt: Date
    updatedAt: Date
    isDisabled: boolean
    _count: AuthCredentialCountAggregateOutputType | null
    _min: AuthCredentialMinAggregateOutputType | null
    _max: AuthCredentialMaxAggregateOutputType | null
  }

  type GetAuthCredentialGroupByPayload<T extends AuthCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], AuthCredentialGroupByOutputType[P]>
        }
      >
    >


  export type AuthCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDisabled?: boolean
  }, ExtArgs["result"]["authCredential"]>

  export type AuthCredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDisabled?: boolean
  }, ExtArgs["result"]["authCredential"]>

  export type AuthCredentialSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDisabled?: boolean
  }


  export type $AuthCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthCredential"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      role: string
      createdAt: Date
      updatedAt: Date
      isDisabled: boolean
    }, ExtArgs["result"]["authCredential"]>
    composites: {}
  }

  type AuthCredentialGetPayload<S extends boolean | null | undefined | AuthCredentialDefaultArgs> = $Result.GetResult<Prisma.$AuthCredentialPayload, S>

  type AuthCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthCredentialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthCredentialCountAggregateInputType | true
    }

  export interface AuthCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthCredential'], meta: { name: 'AuthCredential' } }
    /**
     * Find zero or one AuthCredential that matches the filter.
     * @param {AuthCredentialFindUniqueArgs} args - Arguments to find a AuthCredential
     * @example
     * // Get one AuthCredential
     * const authCredential = await prisma.authCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthCredentialFindUniqueArgs>(args: SelectSubset<T, AuthCredentialFindUniqueArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuthCredential that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuthCredentialFindUniqueOrThrowArgs} args - Arguments to find a AuthCredential
     * @example
     * // Get one AuthCredential
     * const authCredential = await prisma.authCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuthCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCredentialFindFirstArgs} args - Arguments to find a AuthCredential
     * @example
     * // Get one AuthCredential
     * const authCredential = await prisma.authCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthCredentialFindFirstArgs>(args?: SelectSubset<T, AuthCredentialFindFirstArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuthCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCredentialFindFirstOrThrowArgs} args - Arguments to find a AuthCredential
     * @example
     * // Get one AuthCredential
     * const authCredential = await prisma.authCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuthCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthCredentials
     * const authCredentials = await prisma.authCredential.findMany()
     * 
     * // Get first 10 AuthCredentials
     * const authCredentials = await prisma.authCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authCredentialWithIdOnly = await prisma.authCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthCredentialFindManyArgs>(args?: SelectSubset<T, AuthCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuthCredential.
     * @param {AuthCredentialCreateArgs} args - Arguments to create a AuthCredential.
     * @example
     * // Create one AuthCredential
     * const AuthCredential = await prisma.authCredential.create({
     *   data: {
     *     // ... data to create a AuthCredential
     *   }
     * })
     * 
     */
    create<T extends AuthCredentialCreateArgs>(args: SelectSubset<T, AuthCredentialCreateArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuthCredentials.
     * @param {AuthCredentialCreateManyArgs} args - Arguments to create many AuthCredentials.
     * @example
     * // Create many AuthCredentials
     * const authCredential = await prisma.authCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCredentialCreateManyArgs>(args?: SelectSubset<T, AuthCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthCredentials and returns the data saved in the database.
     * @param {AuthCredentialCreateManyAndReturnArgs} args - Arguments to create many AuthCredentials.
     * @example
     * // Create many AuthCredentials
     * const authCredential = await prisma.authCredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthCredentials and only return the `id`
     * const authCredentialWithIdOnly = await prisma.authCredential.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuthCredential.
     * @param {AuthCredentialDeleteArgs} args - Arguments to delete one AuthCredential.
     * @example
     * // Delete one AuthCredential
     * const AuthCredential = await prisma.authCredential.delete({
     *   where: {
     *     // ... filter to delete one AuthCredential
     *   }
     * })
     * 
     */
    delete<T extends AuthCredentialDeleteArgs>(args: SelectSubset<T, AuthCredentialDeleteArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuthCredential.
     * @param {AuthCredentialUpdateArgs} args - Arguments to update one AuthCredential.
     * @example
     * // Update one AuthCredential
     * const authCredential = await prisma.authCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthCredentialUpdateArgs>(args: SelectSubset<T, AuthCredentialUpdateArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuthCredentials.
     * @param {AuthCredentialDeleteManyArgs} args - Arguments to filter AuthCredentials to delete.
     * @example
     * // Delete a few AuthCredentials
     * const { count } = await prisma.authCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthCredentialDeleteManyArgs>(args?: SelectSubset<T, AuthCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthCredentials
     * const authCredential = await prisma.authCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthCredentialUpdateManyArgs>(args: SelectSubset<T, AuthCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthCredential.
     * @param {AuthCredentialUpsertArgs} args - Arguments to update or create a AuthCredential.
     * @example
     * // Update or create a AuthCredential
     * const authCredential = await prisma.authCredential.upsert({
     *   create: {
     *     // ... data to create a AuthCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthCredential we want to update
     *   }
     * })
     */
    upsert<T extends AuthCredentialUpsertArgs>(args: SelectSubset<T, AuthCredentialUpsertArgs<ExtArgs>>): Prisma__AuthCredentialClient<$Result.GetResult<Prisma.$AuthCredentialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuthCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCredentialCountArgs} args - Arguments to filter AuthCredentials to count.
     * @example
     * // Count the number of AuthCredentials
     * const count = await prisma.authCredential.count({
     *   where: {
     *     // ... the filter for the AuthCredentials we want to count
     *   }
     * })
    **/
    count<T extends AuthCredentialCountArgs>(
      args?: Subset<T, AuthCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthCredentialAggregateArgs>(args: Subset<T, AuthCredentialAggregateArgs>): Prisma.PrismaPromise<GetAuthCredentialAggregateType<T>>

    /**
     * Group by AuthCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCredentialGroupByArgs} args - Group by arguments.
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
      T extends AuthCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthCredentialGroupByArgs['orderBy'] }
        : { orderBy?: AuthCredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthCredential model
   */
  readonly fields: AuthCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuthCredential model
   */ 
  interface AuthCredentialFieldRefs {
    readonly id: FieldRef<"AuthCredential", 'String'>
    readonly username: FieldRef<"AuthCredential", 'String'>
    readonly passwordHash: FieldRef<"AuthCredential", 'String'>
    readonly role: FieldRef<"AuthCredential", 'String'>
    readonly createdAt: FieldRef<"AuthCredential", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthCredential", 'DateTime'>
    readonly isDisabled: FieldRef<"AuthCredential", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AuthCredential findUnique
   */
  export type AuthCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * Filter, which AuthCredential to fetch.
     */
    where: AuthCredentialWhereUniqueInput
  }

  /**
   * AuthCredential findUniqueOrThrow
   */
  export type AuthCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * Filter, which AuthCredential to fetch.
     */
    where: AuthCredentialWhereUniqueInput
  }

  /**
   * AuthCredential findFirst
   */
  export type AuthCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * Filter, which AuthCredential to fetch.
     */
    where?: AuthCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCredentials to fetch.
     */
    orderBy?: AuthCredentialOrderByWithRelationInput | AuthCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthCredentials.
     */
    cursor?: AuthCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthCredentials.
     */
    distinct?: AuthCredentialScalarFieldEnum | AuthCredentialScalarFieldEnum[]
  }

  /**
   * AuthCredential findFirstOrThrow
   */
  export type AuthCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * Filter, which AuthCredential to fetch.
     */
    where?: AuthCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCredentials to fetch.
     */
    orderBy?: AuthCredentialOrderByWithRelationInput | AuthCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthCredentials.
     */
    cursor?: AuthCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthCredentials.
     */
    distinct?: AuthCredentialScalarFieldEnum | AuthCredentialScalarFieldEnum[]
  }

  /**
   * AuthCredential findMany
   */
  export type AuthCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * Filter, which AuthCredentials to fetch.
     */
    where?: AuthCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCredentials to fetch.
     */
    orderBy?: AuthCredentialOrderByWithRelationInput | AuthCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthCredentials.
     */
    cursor?: AuthCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCredentials.
     */
    skip?: number
    distinct?: AuthCredentialScalarFieldEnum | AuthCredentialScalarFieldEnum[]
  }

  /**
   * AuthCredential create
   */
  export type AuthCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * The data needed to create a AuthCredential.
     */
    data: XOR<AuthCredentialCreateInput, AuthCredentialUncheckedCreateInput>
  }

  /**
   * AuthCredential createMany
   */
  export type AuthCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthCredentials.
     */
    data: AuthCredentialCreateManyInput | AuthCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthCredential createManyAndReturn
   */
  export type AuthCredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuthCredentials.
     */
    data: AuthCredentialCreateManyInput | AuthCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthCredential update
   */
  export type AuthCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * The data needed to update a AuthCredential.
     */
    data: XOR<AuthCredentialUpdateInput, AuthCredentialUncheckedUpdateInput>
    /**
     * Choose, which AuthCredential to update.
     */
    where: AuthCredentialWhereUniqueInput
  }

  /**
   * AuthCredential updateMany
   */
  export type AuthCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthCredentials.
     */
    data: XOR<AuthCredentialUpdateManyMutationInput, AuthCredentialUncheckedUpdateManyInput>
    /**
     * Filter which AuthCredentials to update
     */
    where?: AuthCredentialWhereInput
  }

  /**
   * AuthCredential upsert
   */
  export type AuthCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * The filter to search for the AuthCredential to update in case it exists.
     */
    where: AuthCredentialWhereUniqueInput
    /**
     * In case the AuthCredential found by the `where` argument doesn't exist, create a new AuthCredential with this data.
     */
    create: XOR<AuthCredentialCreateInput, AuthCredentialUncheckedCreateInput>
    /**
     * In case the AuthCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthCredentialUpdateInput, AuthCredentialUncheckedUpdateInput>
  }

  /**
   * AuthCredential delete
   */
  export type AuthCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
    /**
     * Filter which AuthCredential to delete.
     */
    where: AuthCredentialWhereUniqueInput
  }

  /**
   * AuthCredential deleteMany
   */
  export type AuthCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthCredentials to delete
     */
    where?: AuthCredentialWhereInput
  }

  /**
   * AuthCredential without action
   */
  export type AuthCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCredential
     */
    select?: AuthCredentialSelect<ExtArgs> | null
  }


  /**
   * Model OtpLog
   */

  export type AggregateOtpLog = {
    _count: OtpLogCountAggregateOutputType | null
    _min: OtpLogMinAggregateOutputType | null
    _max: OtpLogMaxAggregateOutputType | null
  }

  export type OtpLogMinAggregateOutputType = {
    id: string | null
    username: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
    consumedAt: Date | null
  }

  export type OtpLogMaxAggregateOutputType = {
    id: string | null
    username: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
    consumedAt: Date | null
  }

  export type OtpLogCountAggregateOutputType = {
    id: number
    username: number
    otp: number
    expiresAt: number
    createdAt: number
    consumedAt: number
    _all: number
  }


  export type OtpLogMinAggregateInputType = {
    id?: true
    username?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    consumedAt?: true
  }

  export type OtpLogMaxAggregateInputType = {
    id?: true
    username?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    consumedAt?: true
  }

  export type OtpLogCountAggregateInputType = {
    id?: true
    username?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    consumedAt?: true
    _all?: true
  }

  export type OtpLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpLog to aggregate.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpLogs
    **/
    _count?: true | OtpLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpLogMaxAggregateInputType
  }

  export type GetOtpLogAggregateType<T extends OtpLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpLog[P]>
      : GetScalarType<T[P], AggregateOtpLog[P]>
  }




  export type OtpLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpLogWhereInput
    orderBy?: OtpLogOrderByWithAggregationInput | OtpLogOrderByWithAggregationInput[]
    by: OtpLogScalarFieldEnum[] | OtpLogScalarFieldEnum
    having?: OtpLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpLogCountAggregateInputType | true
    _min?: OtpLogMinAggregateInputType
    _max?: OtpLogMaxAggregateInputType
  }

  export type OtpLogGroupByOutputType = {
    id: string
    username: string
    otp: string
    expiresAt: Date
    createdAt: Date
    consumedAt: Date | null
    _count: OtpLogCountAggregateOutputType | null
    _min: OtpLogMinAggregateOutputType | null
    _max: OtpLogMaxAggregateOutputType | null
  }

  type GetOtpLogGroupByPayload<T extends OtpLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpLogGroupByOutputType[P]>
            : GetScalarType<T[P], OtpLogGroupByOutputType[P]>
        }
      >
    >


  export type OtpLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    consumedAt?: boolean
  }, ExtArgs["result"]["otpLog"]>

  export type OtpLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    consumedAt?: boolean
  }, ExtArgs["result"]["otpLog"]>

  export type OtpLogSelectScalar = {
    id?: boolean
    username?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    consumedAt?: boolean
  }


  export type $OtpLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      otp: string
      expiresAt: Date
      createdAt: Date
      consumedAt: Date | null
    }, ExtArgs["result"]["otpLog"]>
    composites: {}
  }

  type OtpLogGetPayload<S extends boolean | null | undefined | OtpLogDefaultArgs> = $Result.GetResult<Prisma.$OtpLogPayload, S>

  type OtpLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtpLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtpLogCountAggregateInputType | true
    }

  export interface OtpLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpLog'], meta: { name: 'OtpLog' } }
    /**
     * Find zero or one OtpLog that matches the filter.
     * @param {OtpLogFindUniqueArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpLogFindUniqueArgs>(args: SelectSubset<T, OtpLogFindUniqueArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OtpLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OtpLogFindUniqueOrThrowArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OtpLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogFindFirstArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpLogFindFirstArgs>(args?: SelectSubset<T, OtpLogFindFirstArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OtpLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogFindFirstOrThrowArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OtpLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpLogs
     * const otpLogs = await prisma.otpLog.findMany()
     * 
     * // Get first 10 OtpLogs
     * const otpLogs = await prisma.otpLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpLogWithIdOnly = await prisma.otpLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpLogFindManyArgs>(args?: SelectSubset<T, OtpLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OtpLog.
     * @param {OtpLogCreateArgs} args - Arguments to create a OtpLog.
     * @example
     * // Create one OtpLog
     * const OtpLog = await prisma.otpLog.create({
     *   data: {
     *     // ... data to create a OtpLog
     *   }
     * })
     * 
     */
    create<T extends OtpLogCreateArgs>(args: SelectSubset<T, OtpLogCreateArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OtpLogs.
     * @param {OtpLogCreateManyArgs} args - Arguments to create many OtpLogs.
     * @example
     * // Create many OtpLogs
     * const otpLog = await prisma.otpLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpLogCreateManyArgs>(args?: SelectSubset<T, OtpLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpLogs and returns the data saved in the database.
     * @param {OtpLogCreateManyAndReturnArgs} args - Arguments to create many OtpLogs.
     * @example
     * // Create many OtpLogs
     * const otpLog = await prisma.otpLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpLogs and only return the `id`
     * const otpLogWithIdOnly = await prisma.otpLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OtpLog.
     * @param {OtpLogDeleteArgs} args - Arguments to delete one OtpLog.
     * @example
     * // Delete one OtpLog
     * const OtpLog = await prisma.otpLog.delete({
     *   where: {
     *     // ... filter to delete one OtpLog
     *   }
     * })
     * 
     */
    delete<T extends OtpLogDeleteArgs>(args: SelectSubset<T, OtpLogDeleteArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OtpLog.
     * @param {OtpLogUpdateArgs} args - Arguments to update one OtpLog.
     * @example
     * // Update one OtpLog
     * const otpLog = await prisma.otpLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpLogUpdateArgs>(args: SelectSubset<T, OtpLogUpdateArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OtpLogs.
     * @param {OtpLogDeleteManyArgs} args - Arguments to filter OtpLogs to delete.
     * @example
     * // Delete a few OtpLogs
     * const { count } = await prisma.otpLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpLogDeleteManyArgs>(args?: SelectSubset<T, OtpLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpLogs
     * const otpLog = await prisma.otpLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpLogUpdateManyArgs>(args: SelectSubset<T, OtpLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtpLog.
     * @param {OtpLogUpsertArgs} args - Arguments to update or create a OtpLog.
     * @example
     * // Update or create a OtpLog
     * const otpLog = await prisma.otpLog.upsert({
     *   create: {
     *     // ... data to create a OtpLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpLog we want to update
     *   }
     * })
     */
    upsert<T extends OtpLogUpsertArgs>(args: SelectSubset<T, OtpLogUpsertArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OtpLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogCountArgs} args - Arguments to filter OtpLogs to count.
     * @example
     * // Count the number of OtpLogs
     * const count = await prisma.otpLog.count({
     *   where: {
     *     // ... the filter for the OtpLogs we want to count
     *   }
     * })
    **/
    count<T extends OtpLogCountArgs>(
      args?: Subset<T, OtpLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpLogAggregateArgs>(args: Subset<T, OtpLogAggregateArgs>): Prisma.PrismaPromise<GetOtpLogAggregateType<T>>

    /**
     * Group by OtpLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogGroupByArgs} args - Group by arguments.
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
      T extends OtpLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpLogGroupByArgs['orderBy'] }
        : { orderBy?: OtpLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpLog model
   */
  readonly fields: OtpLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OtpLog model
   */ 
  interface OtpLogFieldRefs {
    readonly id: FieldRef<"OtpLog", 'String'>
    readonly username: FieldRef<"OtpLog", 'String'>
    readonly otp: FieldRef<"OtpLog", 'String'>
    readonly expiresAt: FieldRef<"OtpLog", 'DateTime'>
    readonly createdAt: FieldRef<"OtpLog", 'DateTime'>
    readonly consumedAt: FieldRef<"OtpLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpLog findUnique
   */
  export type OtpLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog findUniqueOrThrow
   */
  export type OtpLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog findFirst
   */
  export type OtpLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpLogs.
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpLogs.
     */
    distinct?: OtpLogScalarFieldEnum | OtpLogScalarFieldEnum[]
  }

  /**
   * OtpLog findFirstOrThrow
   */
  export type OtpLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpLogs.
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpLogs.
     */
    distinct?: OtpLogScalarFieldEnum | OtpLogScalarFieldEnum[]
  }

  /**
   * OtpLog findMany
   */
  export type OtpLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Filter, which OtpLogs to fetch.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpLogs.
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    distinct?: OtpLogScalarFieldEnum | OtpLogScalarFieldEnum[]
  }

  /**
   * OtpLog create
   */
  export type OtpLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * The data needed to create a OtpLog.
     */
    data: XOR<OtpLogCreateInput, OtpLogUncheckedCreateInput>
  }

  /**
   * OtpLog createMany
   */
  export type OtpLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpLogs.
     */
    data: OtpLogCreateManyInput | OtpLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpLog createManyAndReturn
   */
  export type OtpLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OtpLogs.
     */
    data: OtpLogCreateManyInput | OtpLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpLog update
   */
  export type OtpLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * The data needed to update a OtpLog.
     */
    data: XOR<OtpLogUpdateInput, OtpLogUncheckedUpdateInput>
    /**
     * Choose, which OtpLog to update.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog updateMany
   */
  export type OtpLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpLogs.
     */
    data: XOR<OtpLogUpdateManyMutationInput, OtpLogUncheckedUpdateManyInput>
    /**
     * Filter which OtpLogs to update
     */
    where?: OtpLogWhereInput
  }

  /**
   * OtpLog upsert
   */
  export type OtpLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * The filter to search for the OtpLog to update in case it exists.
     */
    where: OtpLogWhereUniqueInput
    /**
     * In case the OtpLog found by the `where` argument doesn't exist, create a new OtpLog with this data.
     */
    create: XOR<OtpLogCreateInput, OtpLogUncheckedCreateInput>
    /**
     * In case the OtpLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpLogUpdateInput, OtpLogUncheckedUpdateInput>
  }

  /**
   * OtpLog delete
   */
  export type OtpLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Filter which OtpLog to delete.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog deleteMany
   */
  export type OtpLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpLogs to delete
     */
    where?: OtpLogWhereInput
  }

  /**
   * OtpLog without action
   */
  export type OtpLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
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


  export const AuthCredentialScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDisabled: 'isDisabled'
  };

  export type AuthCredentialScalarFieldEnum = (typeof AuthCredentialScalarFieldEnum)[keyof typeof AuthCredentialScalarFieldEnum]


  export const OtpLogScalarFieldEnum: {
    id: 'id',
    username: 'username',
    otp: 'otp',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    consumedAt: 'consumedAt'
  };

  export type OtpLogScalarFieldEnum = (typeof OtpLogScalarFieldEnum)[keyof typeof OtpLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type AuthCredentialWhereInput = {
    AND?: AuthCredentialWhereInput | AuthCredentialWhereInput[]
    OR?: AuthCredentialWhereInput[]
    NOT?: AuthCredentialWhereInput | AuthCredentialWhereInput[]
    id?: StringFilter<"AuthCredential"> | string
    username?: StringFilter<"AuthCredential"> | string
    passwordHash?: StringFilter<"AuthCredential"> | string
    role?: StringFilter<"AuthCredential"> | string
    createdAt?: DateTimeFilter<"AuthCredential"> | Date | string
    updatedAt?: DateTimeFilter<"AuthCredential"> | Date | string
    isDisabled?: BoolFilter<"AuthCredential"> | boolean
  }

  export type AuthCredentialOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDisabled?: SortOrder
  }

  export type AuthCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AuthCredentialWhereInput | AuthCredentialWhereInput[]
    OR?: AuthCredentialWhereInput[]
    NOT?: AuthCredentialWhereInput | AuthCredentialWhereInput[]
    passwordHash?: StringFilter<"AuthCredential"> | string
    role?: StringFilter<"AuthCredential"> | string
    createdAt?: DateTimeFilter<"AuthCredential"> | Date | string
    updatedAt?: DateTimeFilter<"AuthCredential"> | Date | string
    isDisabled?: BoolFilter<"AuthCredential"> | boolean
  }, "id" | "username">

  export type AuthCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDisabled?: SortOrder
    _count?: AuthCredentialCountOrderByAggregateInput
    _max?: AuthCredentialMaxOrderByAggregateInput
    _min?: AuthCredentialMinOrderByAggregateInput
  }

  export type AuthCredentialScalarWhereWithAggregatesInput = {
    AND?: AuthCredentialScalarWhereWithAggregatesInput | AuthCredentialScalarWhereWithAggregatesInput[]
    OR?: AuthCredentialScalarWhereWithAggregatesInput[]
    NOT?: AuthCredentialScalarWhereWithAggregatesInput | AuthCredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthCredential"> | string
    username?: StringWithAggregatesFilter<"AuthCredential"> | string
    passwordHash?: StringWithAggregatesFilter<"AuthCredential"> | string
    role?: StringWithAggregatesFilter<"AuthCredential"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthCredential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthCredential"> | Date | string
    isDisabled?: BoolWithAggregatesFilter<"AuthCredential"> | boolean
  }

  export type OtpLogWhereInput = {
    AND?: OtpLogWhereInput | OtpLogWhereInput[]
    OR?: OtpLogWhereInput[]
    NOT?: OtpLogWhereInput | OtpLogWhereInput[]
    id?: StringFilter<"OtpLog"> | string
    username?: StringFilter<"OtpLog"> | string
    otp?: StringFilter<"OtpLog"> | string
    expiresAt?: DateTimeFilter<"OtpLog"> | Date | string
    createdAt?: DateTimeFilter<"OtpLog"> | Date | string
    consumedAt?: DateTimeNullableFilter<"OtpLog"> | Date | string | null
  }

  export type OtpLogOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
  }

  export type OtpLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpLogWhereInput | OtpLogWhereInput[]
    OR?: OtpLogWhereInput[]
    NOT?: OtpLogWhereInput | OtpLogWhereInput[]
    username?: StringFilter<"OtpLog"> | string
    otp?: StringFilter<"OtpLog"> | string
    expiresAt?: DateTimeFilter<"OtpLog"> | Date | string
    createdAt?: DateTimeFilter<"OtpLog"> | Date | string
    consumedAt?: DateTimeNullableFilter<"OtpLog"> | Date | string | null
  }, "id">

  export type OtpLogOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
    _count?: OtpLogCountOrderByAggregateInput
    _max?: OtpLogMaxOrderByAggregateInput
    _min?: OtpLogMinOrderByAggregateInput
  }

  export type OtpLogScalarWhereWithAggregatesInput = {
    AND?: OtpLogScalarWhereWithAggregatesInput | OtpLogScalarWhereWithAggregatesInput[]
    OR?: OtpLogScalarWhereWithAggregatesInput[]
    NOT?: OtpLogScalarWhereWithAggregatesInput | OtpLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpLog"> | string
    username?: StringWithAggregatesFilter<"OtpLog"> | string
    otp?: StringWithAggregatesFilter<"OtpLog"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OtpLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OtpLog"> | Date | string
    consumedAt?: DateTimeNullableWithAggregatesFilter<"OtpLog"> | Date | string | null
  }

  export type AuthCredentialCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDisabled?: boolean
  }

  export type AuthCredentialUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDisabled?: boolean
  }

  export type AuthCredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthCredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthCredentialCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDisabled?: boolean
  }

  export type AuthCredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthCredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OtpLogCreateInput = {
    id?: string
    username: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
    consumedAt?: Date | string | null
  }

  export type OtpLogUncheckedCreateInput = {
    id?: string
    username: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
    consumedAt?: Date | string | null
  }

  export type OtpLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpLogCreateManyInput = {
    id?: string
    username: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
    consumedAt?: Date | string | null
  }

  export type OtpLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDisabled?: SortOrder
  }

  export type AuthCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDisabled?: SortOrder
  }

  export type AuthCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDisabled?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OtpLogCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    consumedAt?: SortOrder
  }

  export type OtpLogMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    consumedAt?: SortOrder
  }

  export type OtpLogMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    consumedAt?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AuthCredentialDefaultArgs instead
     */
    export type AuthCredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthCredentialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtpLogDefaultArgs instead
     */
    export type OtpLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtpLogDefaultArgs<ExtArgs>

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