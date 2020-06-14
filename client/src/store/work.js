const work = {
    namespaced: true,
    state: {
        status: 'SUCCESS',
        list: [
            {
                id: 1,
                content: {
                    image: '/uploads/work-image.png',
                    title: 'Example A',
                    subtitle: 'Example A Subtitle',
                    content: '<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>',
                    tags: [
                        'Tag1',
                    ],
                    startDate: '2020-01-01T14:00:00.000+09:00',
                    endDate: '2020-02-01T14:00:00.000+09:00',
                    isMain: true,
                },
            },
            {
                id: 2,
                content: {
                    image: '/uploads/work-image.png',
                    title: 'Example B',
                    subtitle: 'Example B Subtitle',
                    content: '<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>',
                    tags: [
                        'Tag2',
                    ],
                    startDate: '2020-02-01T14:00:00.000+09:00',
                    endDate: '2020-03-01T14:00:00.000+09:00',
                    isMain: true,
                },
            },
            {
                id: 3,
                content: {
                    image: '/uploads/work-image.png',
                    title: 'Example C',
                    subtitle: 'Example C Subtitle',
                    content: '<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>',
                    tags: [
                        'Tag1',
                        'Tag2',
                    ],
                    startDate: '2020-03-01T14:00:00.000+09:00',
                    endDate: '2020-04-01T14:00:00.000+09:00',
                    isMain: true,
                },
            },
            {
                id: 4,
                content: {
                    image: '/uploads/work-image.png',
                    title: 'Example D',
                    subtitle: 'Example D Subtitle',
                    content: '<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>',
                    tags: [
                        'Tag1',
                        'Tag2',
                        'Tag3',
                    ],
                    startDate: '2020-03-01T14:00:00.000+09:00',
                    endDate: '2020-04-01T14:00:00.000+09:00',
                    isMain: false,
                },
            },
            {
                id: 5,
                content: {
                    image: '/uploads/work-image.png',
                    title: 'Example E',
                    subtitle: 'Example E Subtitle',
                    content: '<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>',
                    tags: [
                        'Tag4',
                    ],
                    startDate: '2020-02-01T14:00:00.000+09:00',
                    endDate: '2020-03-01T14:00:00.000+09:00',
                    isMain: false,
                },
            },
            {
                id: 6,
                content: {
                    image: '/uploads/work-image.png',
                    title: 'Example F',
                    subtitle: 'Example F Subtitle',
                    content: '<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>',
                    tags: [
                        'Tag5',
                    ],
                    startDate: '2020-01-01T14:00:00.000+09:00',
                    endDate: '2020-02-01T14:00:00.000+09:00',
                    isMain: false,
                },
            },
            {
                id: 7,
                content: {
                    image: '/uploads/work-image.png',
                    title: 'Example G',
                    subtitle: 'Example G Subtitle',
                    content: '<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>',
                    tags: [
                        'Tag6',
                    ],
                    startDate: '2020-01-01T14:00:00.000+09:00',
                    endDate: '2020-03-01T14:00:00.000+09:00',
                    isMain: false,
                },
            },
        ],
        tags: [],
    },
    getters: {
        mainList: (state) => state.list.filter((item) => item.content.isMain),
        activeList: (state) => {
            if (state.tags.reduce((acc, cur) => acc + (cur.isActive ? 1 : 0), 0) > 0) {
                const tags = state.tags.filter((item) => item.isActive).map((item) => item.name);
                return state.list
                    .filter((item) => item.content.tags.some((tag) => tags.includes(tag)));
            }
            return state.list;
        },
    },
    mutations: {
        setTags(state) {
            state.tags = Array.from(new Set(state.list.map((item) => item.content.tags)
                .flat()))
                .map((item) => ({ name: item, isActive: false }));
        },
        toggleTag(state, payload) {
            state.tags = state.tags.map((item) => {
                if (item.name === payload.name) {
                    return {
                        ...item,
                        isActive: !item.isActive,
                    };
                }
                return item;
            });
        },
    },
    actions: {
        load({ commit }) {
            commit('setTags');
        },
        toggleTag({ commit }, payload) {
            commit('toggleTag', payload);
        },
    },
};

export default work;
