const PRODUCTION_MODE = true;
const appdb = {
  config: {
    subject: "",
    class: "Class 3",
    id: "riz_569",
    totalPages: 96,
    bookWidth: 1259,
    bookHeight: 1646,
    prePages: [
      { pageUrl: "cover.jpg", pageName: "Cover" },
      // { pageUrl: "EVS-V_4_page-0002.jpg", pageName: "Blank" },
      // { pageUrl: "EVS-V_4_page-0003.jpg", pageName: "Blank" },
      // { pageUrl: "EVS-V_4_page-0004.jpg", pageName: "Blank" },
    ],
  },

  ebook: {
    toc: {
      icon: "fa-book",
      menu: "Table of Contents",
      link: "content",
      data: [
        {
          page: 2,
          title: "1. Super Senses",
        },
        {
          page: 8,
          title: "2. A Snake Charmer's Story",
        },
        {
          page: 12,
          title: "3. From Tasting to Digesting",
        },
        {
          page: 17,
          title: "4. Mangoes Round the Year",
        },
        {
          page: 21,
          title: "5. Seeds and Seeds",
        },
        {
          page: 25,
          title: "6. Every Drop Counts",
        },
        {
          page: 29,
          title: "7. Experiments With Water",
        },
        {
          page: 33,
          title: "8. A Treat for Mosquitoes",
        },
        {
          page: 38,
          title: "9. Up You Go!",
        },
        {
          page: 42,
          title: "10. Walls Tell Stories",
        },
        {
          page: 46,
          title: "11. Sunita in Space",
        },
        {
          page: 52,
          title: "12. What if it Finishes..?",
        },
        {
          page: 57,
          title: "13. A Shelter So High",
        },
        {
          page: 61,
          title: "14. When the Earth Shook!",
        },
        {
          page: 65,
          title: "15. Blow Hot, Blow Cold",
        },
        {
          page: 70,
          title: "16. Who will do this Work?",
        },
        {
          page: 73,
          title: "17. Across the wall",
        },
        {
          page: 78,
          title: "18. No Place for Us?",
        },
        {
          page: 82,
          title: "19. A Seed tells a Farmer's Story",
        },
        {
          page: 86,
          title: "20. Whose Forests?",
        },
        {
          page: 91,
          title: "21. Like Father, Like Daughter",
        },
        {
          page: 93,
          title: "22. On the Move Again",
        },
      ],
    },
    // Animations: {
    //   icon: "fa-video-camera",
    //   menu: "Animations",
    //   link: "video",
    //   data: [
    //     {
    //       path: "resources/animations/ch_1_1.mp4",
    //       title: "Family and Friends",
    //       size: "850x480",
    //       page: 3,
    //       chapter: "Chapter 1",
    //     },
    //     {
    //       path: "resources/animations/ch_2_1.mp4",
    //       title: "Going to the Mela",
    //       size: "850x480",
    //       page: 9,
    //       chapter: "Chapter 2",
    //     },
    //     {
    //       path: "resources/animations/ch_3_1.mp4",
    //       title: "Celebrating Festivals",
    //       size: "850x480",
    //       page: 15,
    //       chapter: "Chapter 3",
    //     },
    //     {
    //       path: "resources/animations/ch_4_1.mp4",
    //       title: "Getting to Know Plants",
    //       size: "850x480",
    //       page: 21,
    //       chapter: "Chapter 4",
    //     },
    //     {
    //       path: "resources/animations/ch_5_1.mp4",
    //       title: "Plants and Animals Live Together",
    //       size: "850x480",
    //       page: 27,
    //       chapter: "Chapter 5",
    //     },
    //     {
    //       path: "resources/animations/ch_6_1.mp4",
    //       title: "Living in Harmony",
    //       size: "850x480",
    //       page: 33,
    //       chapter: "Chapter 6",
    //     },
    //     {
    //       path: "resources/animations/ch_7_1.mp4",
    //       title: "Water-A Precious Gift",
    //       size: "850x480",
    //       page: 39,
    //       chapter: "Chapter 7",
    //     },
    //     {
    //       path: "resources/animations/ch_8_1.mp4",
    //       title: "Food We Eat",
    //       size: "850x480",
    //       page: 43,
    //       chapter: "Chapter 8",
    //     },
    //     {
    //       path: "resources/animations/ch_9_1.mp4",
    //       title: "Staying Healthy and Happy",
    //       size: "850x480",
    //       page: 49,
    //       chapter: "Chapter 9",
    //     },
    //     {
    //       path: "resources/animations/ch_10_1.mp4",
    //       title: "This World of Things",
    //       size: "850x480",
    //       page: 55,
    //       chapter: "Chapter 10",
    //     },
    //     {
    //       path: "resources/animations/ch_11_1.mp4",
    //       title: "Making Things",
    //       size: "850x480",
    //       page: 61,
    //       chapter: "Chapter 11",
    //     },
    //     {
    //       path: "resources/animations/ch_12_1.mp4",
    //       title: "Taking Charge of Waste",
    //       size: "850x480",
    //       page: 69,
    //       chapter: "Chapter 12",
    //     },

    //   ],
    // },
    "Interactivities.": {
      icon: "fa-users",
      menu: "Activities",
      link: "iframe",
      data: [
        {
          path: "resources/interactivities/fib/chap_1_q_5.html",
          title: "Chapter 1, Activity A",
          size: "1024x700",
          page: 6,
        },
        {
          path: "resources/interactivities/fib/chap_1_q_7.html",
          title: "Chapter 1, Activity B",
          size: "1024x650",
          page: 7,
        },
        {
          path: "resources/interactivities/fib/chap_1_q_8.html",
          title: "Chapter 1, Activity C",
          size: "1024x800",
          page: 7,
        },
        {
          path: "resources/interactivities/fib/chap_2_q_1.html",
          title: "Chapter 1, Activity D",
          size: "1024x600",
          page: 9,
        },
        {
          path: "resources/interactivities/true-false/chap_2_q_3.html",
          title: "Chapter 1, Activity E",
          size: "1024x750",
          page: 10,
        },
        {
          path: "resources/interactivities/true-false/chap_2_q_4.html",
          title: "Chapter 1, Activity F",
          size: "1024x1000",
          page: 10,
        },
      ],
    },
    // "Games.": {
    //   icon: "fa-users",
    //   menu: "Games",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },
    // "Test Paper Generator.": {
    //   icon: "fa-users",
    //   menu: "Test Paper Generator",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },

    zother: [],
  },
};

var TOOLS_OPTIONS = {
  sidebar: {
    activate: true,
    id: "tool-sidebar",
  },
  notes: {
    activate: true,
    id: "ebook-addnote",
  },
  zoomin: {
    activate: true,
    id: "tool-zoom-in",
  },
  zoomout: {
    activate: true,
    id: "tool-zoom-out",
  },
  mode: {
    activate: true,
    id: "tool-bookmode-single-double",
  },
  fullscreen: {
    activate: true,
    id: "tool-fullscreen",
  },
  assetmode: {
    activate: true,
    id: "app-btn-toggleres",
  },
  spotlight: {
    activate: true,
    id: "app-btn-spotlight",
  },
  backgroundmusic: {
    activate: true,
    id: "tool-backgroundmusic",
  },
  pen: {
    activate: true,
    id: "app-tool-pen",
  },
  highlighter: {
    activate: true,
    id: "app-tool-highlight",
  },
  thumbnail: {
    activate: true,
    id: "app-tool-thumbnail",
  },
  glossary: {
    activate: false,
    id: "app-btn-glossary",
  },
  bookmarkslist: {
    activate: true,
    id: "app-list-bookmark",
  },
  highlightsList: {
    activate: true,
    id: "app-list-highlights",
  },
  notesList: {
    activate: true,
    id: "app-list-notes",
  },
};
