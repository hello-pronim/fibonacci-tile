import client from "@utils/apolloClient";
import { GlobalNotificationQuery } from "@gql/globalGQL";

export const withGlobalNotification = () => {
    return async function() {
        const {
            data: { globalSet: notifications },
        } = await client.query({
            query: GlobalNotificationQuery,
        });
    }
}