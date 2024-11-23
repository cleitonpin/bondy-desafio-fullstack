import { GraphQLResolveInfo } from 'graphql'
import { mutationTest } from './mutationTest'
import { loginUser } from './loginUser'

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),
  loginUser: (parent: any, args: any, context: any, info: GraphQLResolveInfo) =>
    loginUser(parent, args, context, info),
}
