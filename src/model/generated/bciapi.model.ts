import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from '../../core/graphql/graphql-context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};

export type BciCaseType = {
   __typename?: 'BciCaseType',
  identifier: Scalars['ID'],
  lastUpdateDate: Scalars['Date'],
  interactionRoles: Array<BciRole>,
  type: Scalars['String'],
  status: BciStatusType,
  priority: Scalars['String'],
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type BciCodeType = {
   __typename?: 'BciCodeType',
  value: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type BciRole = {
   __typename?: 'BciRole',
  type: Scalars['String'],
  identifier: Scalars['String'],
};

export type BciStatusType = {
   __typename?: 'BciStatusType',
  code: BciCodeType,
  reason: Scalars['String'],
  validFor: Scalars['Date'],
};


export type PongType = {
   __typename?: 'PongType',
  dateTime: Scalars['Date'],
  message: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  pingBci?: Maybe<PongType>,
  cases?: Maybe<Array<Maybe<BciCaseType>>>,
  case?: Maybe<BciCaseType>,
};


export type QueryCaseArgs = {
  id: Scalars['String']
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  PongType: ResolverTypeWrapper<any>,
  Date: ResolverTypeWrapper<any>,
  String: ResolverTypeWrapper<any>,
  BciCaseType: ResolverTypeWrapper<any>,
  ID: ResolverTypeWrapper<any>,
  BciRole: ResolverTypeWrapper<any>,
  BciStatusType: ResolverTypeWrapper<any>,
  BciCodeType: ResolverTypeWrapper<any>,
  Boolean: ResolverTypeWrapper<any>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  PongType: any,
  Date: any,
  String: any,
  BciCaseType: any,
  ID: any,
  BciRole: any,
  BciStatusType: any,
  BciCodeType: any,
  Boolean: any,
};

export type BciCaseTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BciCaseType'] = ResolversParentTypes['BciCaseType']> = {
  identifier?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  lastUpdateDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  interactionRoles?: Resolver<Array<ResolversTypes['BciRole']>, ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['BciStatusType'], ParentType, ContextType>,
  priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type BciCodeTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BciCodeType'] = ResolversParentTypes['BciCodeType']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type BciRoleResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BciRole'] = ResolversParentTypes['BciRole']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type BciStatusTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BciStatusType'] = ResolversParentTypes['BciStatusType']> = {
  code?: Resolver<ResolversTypes['BciCodeType'], ParentType, ContextType>,
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  validFor?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type PongTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PongType'] = ResolversParentTypes['PongType']> = {
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pingBci?: Resolver<Maybe<ResolversTypes['PongType']>, ParentType, ContextType>,
  cases?: Resolver<Maybe<Array<Maybe<ResolversTypes['BciCaseType']>>>, ParentType, ContextType>,
  case?: Resolver<Maybe<ResolversTypes['BciCaseType']>, ParentType, ContextType, RequireFields<QueryCaseArgs, 'id'>>,
};

export type Resolvers<ContextType = GraphQLContext> = {
  BciCaseType?: BciCaseTypeResolvers<ContextType>,
  BciCodeType?: BciCodeTypeResolvers<ContextType>,
  BciRole?: BciRoleResolvers<ContextType>,
  BciStatusType?: BciStatusTypeResolvers<ContextType>,
  Date?: GraphQLScalarType,
  PongType?: PongTypeResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = GraphQLContext> = Resolvers<ContextType>;
