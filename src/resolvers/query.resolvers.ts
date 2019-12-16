import { PongType, Resolvers, ResolversTypes, QueryCaseArgs, BciCaseType, Maybe } from '../model/generated/bciapi.model';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { GraphQLResolveInfo } from 'graphql';
import { BciCaseService } from '../services/case.service';

export const queryResolvers: Resolvers<GraphQLContext> = {
    Query: {
        pingBci: async (parent: ResolversTypes['PongType'], args: any, ctx: GraphQLContext, info: GraphQLResolveInfo): Promise<PongType> => {
            return await {
                dateTime: new Date().toISOString(),
                message: 'pong'
            };
        },

        cases: (parent: ResolversTypes['BciCaseType'], args: any, ctx: GraphQLContext, info: GraphQLResolveInfo): Promise<Maybe<Array<BciCaseType>>> => {
            return new BciCaseService().getAllCasesAsync(ctx);
        },

        case: (parent: ResolversTypes['BciCaseType'], args: QueryCaseArgs, ctx: GraphQLContext, info: GraphQLResolveInfo): Promise<Maybe<BciCaseType>> => {
            return new BciCaseService().getCaseByIdAsync(args.id, ctx);
        }
    }
};
