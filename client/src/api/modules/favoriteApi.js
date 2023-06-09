import privateClient from '../client/privateClient';

const favoriteEndpoints = {
    list: 'user/favorites',
    add: 'user/favorites',
    remove: ({ favoriteId }) => `user/favorites/${favoriteId}`,
};

const favoriteApi = {
    getList: async () => {
        try {
            const response = await privateClient.get(favoriteEndpoints.list);
            return { response };
        } catch (err) {
            return { err };
        }
    },
    add: async ({ productId }) => {
        try {
            const response = await privateClient.post(favoriteEndpoints.add, {
                productId,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    remove: async ({ favoriteId }) => {
        try {
            const response = await privateClient.delete(
                favoriteEndpoints.remove({ favoriteId })
            );
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default favoriteApi;
