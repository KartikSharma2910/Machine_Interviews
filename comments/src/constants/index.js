export const commentsData = [
  {
    id: 1,
    name: "Alice Johnson",
    comment: "This is a great article! Thanks for sharing.",
    timestamp: "2024-08-01T10:15:30Z",
    reply: [
      {
        id: 2,
        name: "Bob Smith",
        comment: "I agree with Alice. Very informative.",
        timestamp: "2024-08-01T11:00:45Z",
        reply: [
          {
            id: 3,
            name: "Charlie Brown",
            comment: "Bob, you make a good point!",
            timestamp: "2024-08-01T11:30:20Z",
            reply: [
              {
                id: 4,
                name: "Eve Miller",
                comment: "Charlie, I totally agree with you!",
                timestamp: "2024-08-01T12:00:10Z",
                reply: [
                  {
                    id: 5,
                    name: "Frank White",
                    comment:
                      "Eve, your perspective adds even more value to this discussion.",
                    timestamp: "2024-08-01T12:45:35Z",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "David Wright",
        comment: "Alice, I have a question about the third paragraph.",
        timestamp: "2024-08-01T13:15:50Z",
        reply: [
          {
            id: 7,
            name: "Alice Johnson",
            comment: "Sure, David! What would you like to know?",
            timestamp: "2024-08-01T13:45:25Z",
            reply: [
              {
                id: 8,
                name: "David Wright",
                comment: "Could you clarify the point about market trends?",
                timestamp: "2024-08-01T14:00:00Z",
                reply: [
                  {
                    id: 9,
                    name: "Alice Johnson",
                    comment: "Certainly! Market trends refer to...",
                    timestamp: "2024-08-01T14:30:40Z",
                    reply: [
                      {
                        id: 10,
                        name: "Grace Lee",
                        comment:
                          "Alice, that explanation was very clear. Thank you!",
                        timestamp: "2024-08-01T15:00:15Z",
                        reply: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Henry Adams",
    comment: "I have a different perspective on the topic.",
    timestamp: "2024-08-02T09:20:30Z",
    reply: [
      {
        id: 12,
        name: "Isabella Thompson",
        comment: "Henry, I'm curious to hear more about your perspective.",
        timestamp: "2024-08-02T10:10:55Z",
        reply: [
          {
            id: 13,
            name: "Henry Adams",
            comment:
              "Isabella, I think the market trends are leaning towards...",
            timestamp: "2024-08-02T10:45:00Z",
            reply: [
              {
                id: 14,
                name: "Jack Robinson",
                comment:
                  "Henry, that’s an interesting take! What data are you basing that on?",
                timestamp: "2024-08-02T11:20:45Z",
                reply: [
                  {
                    id: 15,
                    name: "Henry Adams",
                    comment: "Jack, I based it on recent reports from...",
                    timestamp: "2024-08-02T11:50:30Z",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Eve Miller",
    comment: "Can someone explain the second point in more detail?",
    timestamp: "2024-08-02T12:30:15Z",
    reply: [],
  },
];
