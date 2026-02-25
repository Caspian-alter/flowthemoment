import type { Locale } from './utils';

interface StoryBlock {
  title: string;
  body: string[];
}

interface Principle {
  icon: string;
  title: string;
  body: string;
}

interface AppItem {
  id: string;
  name: string;
  nameEn: string;
  oneLine: string;
  status: string;
  bullets: string[];
  detail: string;
}

interface FAQItem {
  q: string;
  a: string;
}

type LocaleCopy = {
  meta: {
    siteName: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    apps: string;
    about: string;
    blog: string;
    privacy: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    calmNote: string;
  };
  story: {
    id: string;
    title: string;
    intro: string;
    blocks: StoryBlock[];
    quote: string;
  };
  principles: {
    title: string;
    intro: string;
    items: Principle[];
  };
  apps: {
    title: string;
    intro: string;
    badgeComing: string;
    badgeProgress: string;
    learnMore: string;
    items: AppItem[];
  };
  waitlist: {
    title: string;
    body: string;
    placeholder: string;
    button: string;
    privacy: string;
    success: string;
    fallback: string;
  };
  footer: {
    studioNote: string;
    social: string;
    copyright: string;
  };
  appsPage: {
    title: string;
    intro: string;
    sectionTitle: string;
    faqTitle: string;
    faqs: FAQItem[];
  };
  aboutPage: {
    title: string;
    intro: string;
    paragraphs: string[];
  };
  blog: {
    title: string;
    intro: string;
    empty: string;
    readMore: string;
    exampleBadge: string;
    back: string;
    postedOn: string;
    tags: string;
  };
  privacyPage: {
    title: string;
    updated: string;
    paragraphs: string[];
  };
  notFound: {
    title: string;
    body: string;
    home: string;
    enHome: string;
  };
  common: {
    langLabel: string;
    switchToZh: string;
    switchToEn: string;
    navLabel: string;
    footerLinksLabel: string;
    emailLabel: string;
  };
};

const sharedAppsZh: AppItem[] = [
  {
    id: 'sunshine-breath',
    name: '阳光呼吸',
    nameEn: 'Sunshine Breath',
    oneLine: '给早晨一个温柔开机动作：呼吸、光线与小仪式。',
    status: 'coming',
    bullets: ['2 分钟晨间呼吸引导', '柔和唤醒节奏，减少起床焦虑', '可自定义“开始一天”微仪式'],
    detail:
      '阳光呼吸服务于“刚醒来的那几分钟”。它不催你冲刺，而是帮你在身体和意识之间搭一座桥，让一天从稳定而非紧绷开始。'
  },
  {
    id: 'attention-up',
    name: '注意力UP',
    nameEn: 'Attention Up',
    oneLine: '把脑中一闪而过的念头，轻轻接住。',
    status: 'progress',
    bullets: ['一键捕捉微想法与灵感火花', '低负担整理，减少认知散落', '为 ADHD 用户设计的友好节奏'],
    detail:
      '注意力UP不是待办列表升级版，而是一个“念头缓冲区”。它帮助你先接住，再分类，避免“想到很多、留不住任何一个”的疲惫循环。'
  },
  {
    id: 'steady-flow',
    name: '稳流',
    nameEn: 'Steady Flow',
    oneLine: '把低价值热搜噪音，转译成可呼吸的视觉宁静。',
    status: 'coming',
    bullets: ['趋势词自动降噪处理', '生成自然感壁纸与静心卡片', '把“被打扰”变成“被安顿”'],
    detail:
      '稳流不否认信息洪流存在，而是把它重新编排成可承受的节律。你依然看见世界，但不再被每一次推送牵着走。'
  },
  {
    id: 'app-overdose',
    name: '应用Overdose',
    nameEn: 'App Overdose',
    oneLine: '用有意识的摩擦，帮你拿回时间主导权。',
    status: 'progress',
    bullets: ['温和拦截高频刷屏场景', '建立“我想用”而不是“我被拉走”', '不羞辱，只提供选择和恢复空间'],
    detail:
      '应用Overdose采用“尊重式限制”。它不是全面禁止，而是把自动化滑动变成可觉察的动作，让你在关键几秒里重新选择。'
  }
];

const sharedAppsEn: AppItem[] = [
  {
    id: 'sunshine-breath',
    name: 'Sunshine Breath',
    nameEn: '阳光呼吸',
    oneLine: 'A soft morning start with breath, light, and tiny rituals.',
    status: 'coming',
    bullets: ['2-minute guided breathing', 'Gentle wake rhythm to ease morning anxiety', 'Personalizable start-of-day ritual'],
    detail:
      'Sunshine Breath is for the first minutes after waking up. It does not push you to perform. It helps your body and attention meet before the day gets loud.'
  },
  {
    id: 'attention-up',
    name: 'Attention Up',
    nameEn: '注意力UP',
    oneLine: 'Catch tiny thoughts before they disappear.',
    status: 'progress',
    bullets: ['One-tap capture for sparks and micro-ideas', 'Lightweight organization that lowers cognitive scatter', 'A rhythm shaped for ADHD-friendly use'],
    detail:
      'Attention Up is not another strict planner. It is a buffering space for unfinished thoughts, so ideas can land safely before you decide what they become.'
  },
  {
    id: 'steady-flow',
    name: 'Steady Flow',
    nameEn: '稳流',
    oneLine: 'Transform low-value trend noise into visual calm.',
    status: 'coming',
    bullets: ['Trend keywords pass through a calming filter', 'Generate nature-like wallpapers and focus cards', 'Turn interruption into a quiet visual pause'],
    detail:
      'Steady Flow does not deny the information stream. It reframes it into patterns your nervous system can hold, so awareness stays open without overload.'
  },
  {
    id: 'app-overdose',
    name: 'App Overdose',
    nameEn: '应用Overdose',
    oneLine: 'Mindful friction that helps you reclaim time.',
    status: 'progress',
    bullets: ['Gentle checks in high-scroll moments', 'From autopilot use to intentional use', 'No shame, only choice and recovery space'],
    detail:
      'App Overdose uses respectful friction. It does not punish usage. It creates a small pause so your next action can be chosen, not reflexive.'
  }
];

export const copy: Record<Locale, LocaleCopy> = {
  zh: {
    meta: {
      siteName: 'Flow the Moment · 流动此刻',
      tagline: '把注意力带回当下。把噪音变成宁静，把结构变成自由。',
      description:
        'Flow the Moment（流动此刻）是一个温柔的个人品牌与产品工作室，面向信息焦虑、注意力压力和数字过载，设计尊重人的工具。'
    },
    nav: {
      home: '首页',
      apps: '应用',
      about: '关于',
      blog: '博客',
      privacy: '隐私'
    },
    hero: {
      eyebrow: 'Flow the Moment / 流动此刻',
      title: '让注意力重新呼吸。',
      tagline: '把注意力带回当下。把噪音变成宁静，把结构变成自由。',
      primaryCta: '查看应用',
      secondaryCta: '阅读故事',
      calmNote: '一个关于在场、注意力与数字健康的温柔工作室。'
    },
    story: {
      id: 'story',
      title: '为什么叫「流动此刻」',
      intro: '这不是口号，而是一种对人的态度。',
      blocks: [
        {
          title: '从噪音到在场',
          body: [
            '我们生活在不断弹出的提示、热搜和争抢注意力的机制里。你刚想安静下来，新的刺激已经替你做了决定。',
            '“流动此刻”不是要求你远离世界，而是邀请你把感知带回正在发生的这一秒。先看见，再回应。'
          ]
        },
        {
          title: '保护自由的结构',
          body: [
            '真正的自由，不是毫无边界地被牵引，而是有能力为自己设置温柔的结构。',
            '我们做的是微小而可持续的设计：一个提醒、一段呼吸、一次停顿，让注意力不再被榨干。'
          ]
        },
        {
          title: '先接纳，再改变',
          body: [
            '我们拒绝“你不够自律”的羞辱叙事。分心并不等于失败，疲惫也不需要被道德化。',
            '当人被理解，而不是被责备，改变才会自然发生。'
          ]
        },
        {
          title: '让无形变可见',
          body: [
            '焦虑、冲动、过载，常常像空气一样看不见，却真实地影响每个决定。',
            '我们通过工具把这些隐形波动可视化，帮助你在关键时刻拥有选择权，而不是被习惯拖着走。'
          ]
        }
      ],
      quote:
        '“我们不设计让人上瘾的循环。我们设计的是：人在复杂世界里，依然能保有尊严与自主。”'
    },
    principles: {
      title: '设计原则',
      intro: '每个产品都遵循同一套温柔而清晰的标准。',
      items: [
        {
          icon: '🌿',
          title: '温柔为先',
          body: '先让人感到被允许，再谈效率。'
        },
        {
          icon: '🫧',
          title: '清晰胜过用力',
          body: '减少噪音，给注意力留空间，而不是加压。'
        },
        {
          icon: '🪴',
          title: '微小但真实',
          body: '依靠小步迭代，形成可持续的生活改变。'
        },
        {
          icon: '🧭',
          title: '反成瘾设计',
          body: '不制造停不下来的循环，拒绝操控式增长。'
        },
        {
          icon: '🌊',
          title: '在场是一种技能',
          body: '通过练习而不是意志惩罚，慢慢回到当下。'
        }
      ]
    },
    apps: {
      title: '即将到来的应用',
      intro: '四个方向，服务同一个目标：让注意力更自由地流动。',
      badgeComing: '即将上线',
      badgeProgress: '开发中',
      learnMore: '了解更多',
      items: sharedAppsZh
    },
    waitlist: {
      title: '如果你愿意，留下邮箱。',
      body: '当某个产品准备好时，我会第一时间发你一封简单更新。',
      placeholder: 'you@example.com',
      button: '订阅更新',
      privacy: '仅用于项目更新，不发送营销轰炸。你可以随时离开。',
      success: '谢谢你。更新准备好后，我会温柔地通知你。',
      fallback: '静态站点当前使用 mailto 作为提交方式，后续可接入 API。'
    },
    footer: {
      studioNote: 'Flow the Moment / 流动此刻 · 一个温柔、清醒、面向人的产品工作室。',
      social: '社交（即将开放）',
      copyright: '© {year} Flow the Moment. All rights reserved.'
    },
    appsPage: {
      title: '应用：为在场而设计的工具',
      intro: '这些工具不是为了把你变成更快的机器，而是帮你在现实生活里更稳定地呼吸、专注与选择。',
      sectionTitle: '产品方向',
      faqTitle: '常见问题',
      faqs: [
        {
          q: '这是一套“反生产力”工具吗？',
          a: '不是。我们并不反对效率，而是反对以透支身心为代价的效率。好的专注应该可持续。'
        },
        {
          q: '你们会羞辱分心或拖延的人吗？',
          a: '不会。我们默认每个人都在复杂处境中努力。产品语言与机制都避免羞耻驱动。'
        },
        {
          q: '会出售用户数据或行为画像吗？',
          a: '不会。我们坚持隐私优先，尽量减少数据收集，并明确说明用途。'
        },
        {
          q: '为什么要加入“摩擦设计”？',
          a: '适度摩擦可以让自动行为变得可觉察。目标不是限制你，而是把选择权还给你。'
        },
        {
          q: 'ADHD 用户会被当成“需要修复的人”吗？',
          a: '不会。我们把神经多样性视为真实的人类差异，产品的目标是支持，而不是纠正人格。'
        }
      ]
    },
    aboutPage: {
      title: '关于这个工作室',
      intro: 'Flow the Moment 是一个个人品牌与产品实验室。',
      paragraphs: [
        '我长期关注注意力、数字行为与心理负担之间的关系，尤其是信息过载和 ADHD 场景中的“温柔结构”。',
        '这个工作室希望构建一组小而真实的工具：不制造焦虑，不绑架时间，帮助人回到此刻、回到自主。',
        '如果你也在寻找更可呼吸的数字生活，欢迎一起同行。'
      ]
    },
    blog: {
      title: '博客',
      intro: '记录关于在场、设计与温柔改变的思考。',
      empty: '暂时还没有文章，正在准备中。',
      readMore: '阅读全文',
      exampleBadge: '示例内容',
      back: '返回博客',
      postedOn: '发布于',
      tags: '标签'
    },
    privacyPage: {
      title: '隐私说明（占位）',
      updated: '最后更新：2026 年 2 月 25 日',
      paragraphs: [
        'Flow the Moment 重视你的隐私。当前网站为静态展示站，默认不追踪个人行为。',
        '若你通过邮件订阅更新，你的邮箱仅用于发送产品进展通知。',
        '后续接入正式服务前，会补充完整隐私政策与数据处理细则。'
      ]
    },
    notFound: {
      title: '页面未找到',
      body: '这个页面可能已经流向别处。你可以回到首页继续浏览。',
      home: '返回中文首页',
      enHome: 'Go to English Home'
    },
    common: {
      langLabel: '语言切换',
      switchToZh: '中文',
      switchToEn: 'EN',
      navLabel: '主导航',
      footerLinksLabel: '页脚链接',
      emailLabel: '邮箱'
    }
  },
  en: {
    meta: {
      siteName: 'Flow the Moment',
      tagline: 'Bring attention back to the present moment. Turn noise into calm, structure into freedom.',
      description:
        'Flow the Moment is a personal brand and product studio designing gentle, respectful tools for presence, attention, and digital wellbeing.'
    },
    nav: {
      home: 'Home',
      apps: 'Apps',
      about: 'About',
      blog: 'Blog',
      privacy: 'Privacy'
    },
    hero: {
      eyebrow: 'Flow the Moment / 流动此刻',
      title: 'Let attention breathe again.',
      tagline: 'Bring attention back to the present moment. Turn noise into calm, structure into freedom.',
      primaryCta: 'Explore Apps',
      secondaryCta: 'Read the Story',
      calmNote: 'A gentle studio for presence, attention, and digital wellbeing.'
    },
    story: {
      id: 'story',
      title: 'Why “Flow the Moment”',
      intro: 'Not a slogan. A stance toward being human.',
      blocks: [
        {
          title: 'From noise to presence',
          body: [
            'We live inside constant prompts, trending loops, and systems designed to hijack attention. Before your mind settles, something else decides for you.',
            'Flow the Moment does not ask you to fight the world. It invites you to return to what is alive now, then choose your response from there.'
          ]
        },
        {
          title: 'Structure that protects freedom',
          body: [
            'Freedom is not endless exposure to pulls and pings. Freedom is having supportive boundaries that keep your agency intact.',
            'We build tiny structures that are humane: a pause, a breath, a redirect. Enough to keep attention from being drained.'
          ]
        },
        {
          title: 'Acceptance first, change follows',
          body: [
            'We reject the moral language of “you are not disciplined enough.” Distraction is not a character flaw.',
            'When people are met with understanding instead of judgment, sustainable change becomes possible.'
          ]
        },
        {
          title: 'Make the invisible visible',
          body: [
            'Anxiety, cognitive scatter, and compulsive loops are often invisible but real. They shape decisions before we can name them.',
            'Our tools make these patterns visible, so choice can re-enter the moment.'
          ]
        }
      ],
      quote:
        '“We do not design addictive loops. We design conditions where human dignity and autonomy can survive complexity.”'
    },
    principles: {
      title: 'Principles',
      intro: 'Every product follows the same calm, explicit standards.',
      items: [
        {
          icon: '🌿',
          title: 'Gentle by default',
          body: 'Safety and permission come before optimization.'
        },
        {
          icon: '🫧',
          title: 'Clarity over intensity',
          body: 'Reduce pressure. Increase signal and breathing room.'
        },
        {
          icon: '🪴',
          title: 'Small steps, real change',
          body: 'Sustainable progress grows from tiny repeatable actions.'
        },
        {
          icon: '🧭',
          title: 'Design against addiction',
          body: 'No manipulative hooks. No exploitative growth tricks.'
        },
        {
          icon: '🌊',
          title: 'Presence is a skill',
          body: 'Trainable, practical, and available in ordinary moments.'
        }
      ]
    },
    apps: {
      title: 'Upcoming Apps',
      intro: 'Four products, one direction: freer attention in daily life.',
      badgeComing: 'Coming soon',
      badgeProgress: 'In progress',
      learnMore: 'Learn more',
      items: sharedAppsEn
    },
    waitlist: {
      title: 'If you want, leave an email.',
      body: 'I will send a simple update when something is truly ready.',
      placeholder: 'you@example.com',
      button: 'Join waitlist',
      privacy: 'Used only for product updates. No spam, no pressure.',
      success: 'Thank you. I will reach out gently when there is real progress.',
      fallback: 'This static site currently uses a mailto fallback. API integration can be added later.'
    },
    footer: {
      studioNote: 'Flow the Moment · A gentle studio for mindful tools and digital wellbeing.',
      social: 'Social (coming soon)',
      copyright: '© {year} Flow the Moment. All rights reserved.'
    },
    appsPage: {
      title: 'Apps: tools for presence',
      intro:
        'These products are not built to turn you into a faster machine. They are built to support breathing room, agency, and sustainable habits.',
      sectionTitle: 'Product directions',
      faqTitle: 'FAQ',
      faqs: [
        {
          q: 'Is this anti-productivity?',
          a: 'No. We are not against productivity. We are against productivity that burns people out and erodes dignity.'
        },
        {
          q: 'Do you shame people for distraction?',
          a: 'No. We assume people are doing their best under real constraints. Product language and mechanics avoid shame loops.'
        },
        {
          q: 'Will you sell personal data?',
          a: 'No. Privacy-first is a core principle. We minimize collection and explain usage clearly.'
        },
        {
          q: 'Why introduce friction at all?',
          a: 'A small pause can interrupt autopilot and restore choice. The purpose is agency, not punishment.'
        },
        {
          q: 'How do you approach ADHD users?',
          a: 'With respect for neurodiversity. We design support systems, not “fix-the-user” systems.'
        }
      ]
    },
    aboutPage: {
      title: 'About the Studio',
      intro: 'Flow the Moment is a personal brand and product studio.',
      paragraphs: [
        'I work at the intersection of attention, digital behavior, and emotional load, especially in environments shaped by information overload and ADHD realities.',
        'This studio builds small but meaningful tools: no panic mechanics, no time hijacking, no moral pressure.',
        'If you are looking for a calmer relationship with technology, you are welcome here.'
      ]
    },
    blog: {
      title: 'Blog',
      intro: 'Notes on presence, humane design, and sustainable change.',
      empty: 'No posts yet. New writing is in progress.',
      readMore: 'Read post',
      exampleBadge: 'Example',
      back: 'Back to blog',
      postedOn: 'Posted on',
      tags: 'Tags'
    },
    privacyPage: {
      title: 'Privacy (Placeholder)',
      updated: 'Last updated: February 25, 2026',
      paragraphs: [
        'Flow the Moment respects your privacy. This is currently a static website with no default behavioral tracking.',
        'If you subscribe by email, your address is only used for product progress updates.',
        'A full privacy policy and data handling details will be published before launching production services.'
      ]
    },
    notFound: {
      title: 'Page Not Found',
      body: 'This page may have flowed elsewhere. You can continue from the home page.',
      home: 'Go to Chinese Home',
      enHome: 'Go to English Home'
    },
    common: {
      langLabel: 'Language switcher',
      switchToZh: '中文',
      switchToEn: 'EN',
      navLabel: 'Primary navigation',
      footerLinksLabel: 'Footer links',
      emailLabel: 'Email'
    }
  }
};

export function getCopy(locale: Locale): LocaleCopy {
  return copy[locale];
}
