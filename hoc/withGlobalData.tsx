import { initializeApollo } from "@utils/apolloClient";
import {
  GlobalNotificationQuery,
  GlobalSpecificationQuery,
} from "@gql/globalGQL";

export const withGlobalData = (gssp: any) => {
  const client = initializeApollo();
  return async function (context: any) {
    // get serverside data
    const gsspData = await gssp(context);
    // get notifications
    const {
      data: { globalSet: notifications },
    } = await client.query({
      query: GlobalNotificationQuery,
    });
    const {
      data: { globalSet: specifications },
    } = await client.query({
      query: GlobalSpecificationQuery,
    });
    return {
      ...gsspData,
      props: {
        ...gsspData.props,
        notifications: notifications?.notifications,
        specifications: specifications?.technicalSpecifications,
      },
    };
  };
};
