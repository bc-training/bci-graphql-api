import { Service } from 'typedi';
import cases from './cases.json';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { BciCaseType, Maybe } from '../model/generated/bciapi.model.js';

@Service()
export class BciCaseService {
    private static readonly casesData: BciCaseType[] = cases.data;

    getCaseByIdAsync(caseId: string, ctx: GraphQLContext): Promise<Maybe<BciCaseType>> {
        const c = BciCaseService.casesData.find((value: BciCaseType) => value.identifier === caseId);
        return Promise.resolve(c ? c : null);
    }

    getAllCasesAsync(ctx: GraphQLContext): Promise<Maybe<Array<BciCaseType>>> {
        return Promise.resolve(BciCaseService.casesData);
    }
}
