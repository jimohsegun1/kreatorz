export const data = {
    influenceScore: {
        score: 72,
        level: 'Intermediate',
    },
    scoreHistory: [
        { week: 'Week 1', score: 680 },
        { week: 'Week 2', score: 695 },
        { week: 'Week 3', score: 710 },
        { week: 'Week 4', score: 720 },
    ],
    scoreLevels: [
        {
            title: 'Foundation',
            description: 'Your initial score provides a baseline and a personalized roadmap to build your core brand assets.',
        },
        {
            title: 'Intermediate',
            description: 'Track how new strategies and multi-platform content directly impact your influence and reach.',
        },
        {
            title: 'Advanced',
            description: 'Measure your thought leadership through advanced metrics like media value and network leverage.',
        },
    ],
    pillars: [
        { name: 'Clarity' },
        { name: 'Content' },
        { name: 'Network' },
        { name: 'Leadership' },
        { name: 'Consistency' },
        { name: 'Peer Impact' },
    ],
    sidebarLinks: [
        { title: 'Score Overview', href: '/' },
        { title: 'Pillar Breakdown', href: '/pillar-breakdown' },
        { title: 'Weekly Actions', href: '/weekly-actions' },
        { title: 'Progress Timeline', href: '/progress-timeline' },
    ],
    weeklyActions: [
        {
            title: 'Strengthen Thought Leadership',
            priority: 'High',
            points: 8,
            description: 'Your thought leadership score is 62/100. Publishing original insights will establish your authority in your field.',
            levelPath: 'Advanced Level → Strategic Narrative Builder',
            icon: 'BrainCircuit',
        },
        {
            title: 'Expand Your Network',
            priority: 'Medium',
            points: 5,
            description: 'Your network score is 68/100. Connect with 5 industry leaders and engage meaningfully with their content.',
            levelPath: 'Advanced Level → Network Leverage Map',
            icon: 'Users',
        },
        {
            title: 'Optimize Content Strategy',
            priority: 'Medium',
            points: 4,
            description: 'Your content score is 75/100. Create a multi-platform content calendar to maintain consistent messaging.',
            levelPath: 'Intermediate Level → Multi-Platform Strategy',
            icon: 'Edit',
        }
    ]
};
