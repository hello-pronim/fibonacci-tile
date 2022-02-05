import client from "@utils/apolloClient";
import { GlobalNotificationQuery } from "@gql/globalGQL";

export const withGlobalNotification = (gssp: any) => {
  return async function (context: any) {
    // get serverside data
    const gsspData = await gssp(context);
    // get notifications
    const {
      data: { globalSet: globalData },
    } = await client.query({
      query: GlobalNotificationQuery,
    });
    return {
      ...gsspData,
      props: {
        ...gsspData.props,
        notifications: globalData?.notifications,
      },
    };
  };
};
