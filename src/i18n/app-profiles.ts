import type { Locale } from './utils';

interface SectionPoint {
  title: string;
  body: string;
}

interface FlowStep {
  title: string;
  body: string;
}

export interface AppProfile {
  appId: string;
  slug: string;
  name: string;
  altName: string;
  tagline: string;
  intro: string;
  opening: string[];
  principlesTitle: string;
  principles: SectionPoint[];
  flowTitle: string;
  flow: FlowStep[];
  featureTitle: string;
  features: string[];
  audienceTitle: string;
  audience: string[];
  legalTitle: string;
  legalIntro: string;
  legalPrivacyLabel: string;
  legalTermsLabel: string;
  showcaseTitle?: string;
  showcaseIntro?: string;
  showcaseImages?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

interface AppProfileDefinition {
  appId: string;
  slug: string;
  routeStyle?: 'apps' | 'standalone';
  content: Record<Locale, AppProfile>;
}

const sunnyBreathProfile: AppProfileDefinition = {
  appId: 'sunshine-breath',
  slug: 'sunny-breath',
  routeStyle: 'apps',
  content: {
    zh: {
      appId: 'sunshine-breath',
      slug: 'sunny-breath',
      name: '阳光呼吸',
      altName: 'Sunny Breath',
      tagline: '不是闹钟，是启动。',
      intro: '一个把清晨 0-10 分钟照顾好的启动应用。',
      opening: [
        'Sunny Breath 不是为了把你推上更快的轨道，而是先把你从慌张里接住。',
        '它关注“醒来后的第一步”而不是“连续打卡的成绩”，让习惯形成变得更可持续、更不自责。'
      ],
      principlesTitle: '这个产品在守护什么',
      principles: [
        {
          title: '低压启动，不靠惩罚',
          body: '应用避免 streak 焦虑和强制打卡，不用羞耻驱动你行动。漏掉一天也没关系，温柔回到流程就好。'
        },
        {
          title: '先让身体醒来，再谈效率',
          body: '通过渐进音量、轻动作和情绪记录，让神经系统先稳定，再进入一天的节奏。'
        },
        {
          title: '把复杂目标拆成可完成的小动作',
          body: '你只需要设置 1-3 个“醒来后第一件事”，例如喝水、开窗、呼吸 10 次。门槛低，成功率高。'
        }
      ],
      flowTitle: '典型清晨流程（3-10 分钟）',
      flow: [
        {
          title: '1. 渐进唤醒',
          body: '音乐在约 10 秒内逐步抬升音量，降低被突兀铃声惊醒的不适感。'
        },
        {
          title: '2. 无压力动作',
          body: '完成一到三个轻动作，不追 KPI，只帮助你跨过“启动阻力”。'
        },
        {
          title: '3. 状态记录',
          body: '用极简方式标记当下情绪，不做排名，不做惩罚，给自己一个可见的照面。'
        }
      ],
      featureTitle: '当前核心能力',
      features: [
        '90 秒完成首个流程设置（时间、音乐、一个启动动作）',
        '支持内置音乐与本地音频导入，循环与渐进唤醒可调',
        '本地优先的数据体验，减少不必要云端依赖',
        '7 天试用 + 订阅/买断并存，避免订阅陷阱式设计'
      ],
      audienceTitle: '适合这样的人',
      audience: [
        '作息容易漂移，早晨常常被“必须马上清醒”压住的人',
        '想建立规律，但不想再被打卡焦虑和自责叙事消耗的人',
        '希望用温和结构慢慢变稳的创作者、自由职业者与学生'
      ],
      legalTitle: '法律文档',
      legalIntro: '这里收录了与 Sunny Breath 相关的隐私与使用条款。',
      legalPrivacyLabel: '隐私协议',
      legalTermsLabel: '使用条款',
      showcaseImages: [
        {
          src: '/images/sunny-breath/zh/zh-1.png',
          alt: '阳光呼吸中文宣传图 1：主页面展示'
        },
        {
          src: '/images/sunny-breath/zh/zh-2.png',
          alt: '阳光呼吸中文宣传图 2：记录页展示'
        },
        {
          src: '/images/sunny-breath/zh/zh-3.png',
          alt: '阳光呼吸中文宣传图 3：流程页展示'
        },
        {
          src: '/images/sunny-breath/zh/zh-4.png',
          alt: '阳光呼吸中文宣传图 4：闹钟编辑页展示'
        }
      ]
    },
    en: {
      appId: 'sunshine-breath',
      slug: 'sunny-breath',
      name: 'Sunny Breath',
      altName: '阳光呼吸',
      tagline: 'Not an alarm. A gentle start.',
      intro: 'A morning startup app that cares for the first 0-10 minutes of your day.',
      opening: [
        'Sunny Breath is not built to force performance. It is built to catch you before the day turns noisy.',
        'It values your first step after waking more than streak scores, so habit-building stays humane and repeatable.'
      ],
      principlesTitle: 'What this product protects',
      principles: [
        {
          title: 'Low-pressure start, no punishment loops',
          body: 'No shame mechanics, no streak anxiety. Missing a day is acceptable. Returning gently is the goal.'
        },
        {
          title: 'Regulate first, optimize later',
          body: 'Gradual audio, small wake actions, and mood logging help your nervous system settle before demand begins.'
        },
        {
          title: 'Tiny steps over heroic plans',
          body: 'Set 1-3 first actions after waking, such as water, opening curtains, or ten breaths. Low barrier, high follow-through.'
        }
      ],
      flowTitle: 'A typical 3-10 minute morning flow',
      flow: [
        {
          title: '1. Gradual wake-up',
          body: 'Audio ramps up over about 10 seconds, reducing the shock of abrupt alarms.'
        },
        {
          title: '2. Low-pressure starter actions',
          body: 'Complete one to three gentle actions. No KPI. Just enough structure to cross startup resistance.'
        },
        {
          title: '3. Mood check-in',
          body: 'Log your current state with minimal friction. No ranking, no punishment, just visibility.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'Set up your first flow in about 90 seconds (time, music, one starter action)',
        'Built-in music + local audio import, with repeat and gradual wake controls',
        'Local-first data handling to reduce unnecessary cloud dependence',
        '7-day trial with subscription or lifetime unlock, avoiding trap-style monetization'
      ],
      audienceTitle: 'Who this is for',
      audience: [
        'People whose sleep rhythm drifts and mornings feel immediately overwhelming',
        'People who want consistency without streak pressure and self-attack loops',
        'Creators, freelancers, and students who prefer gentle structure over brute force'
      ],
      legalTitle: 'Legal Documents',
      legalIntro: 'Privacy and terms for Sunny Breath are collected here.',
      legalPrivacyLabel: 'Privacy Policy',
      legalTermsLabel: 'Terms of Use',
      showcaseImages: [
        {
          src: '/images/sunny-breath/en/en-1.png',
          alt: 'Sunny Breath promotional image 1: morning home view'
        },
        {
          src: '/images/sunny-breath/en/en-2.png',
          alt: 'Sunny Breath promotional image 2: records view'
        },
        {
          src: '/images/sunny-breath/en/en-3.png',
          alt: 'Sunny Breath promotional image 3: flow session view'
        },
        {
          src: '/images/sunny-breath/en/en-4.png',
          alt: 'Sunny Breath promotional image 4: alarm edit view'
        }
      ]
    }
  }
};

const lightIdeasProfile: AppProfileDefinition = {
  appId: 'light-ideas',
  slug: 'light-ideas',
  routeStyle: 'standalone',
  content: {
    zh: {
      appId: 'light-ideas',
      slug: 'light-ideas',
      name: '轻想法',
      altName: 'Light Ideas',
      tagline: '让念头先有地方落下，再决定它要去哪里。',
      intro: '一个为碎片化思绪设计的轻量想法板，把突然出现的念头，从漂浮带到凝结。',
      opening: [
        '轻想法不是待办清单，也不是第二个会催促你的知识库。它更像一个有呼吸感的过渡空间，先帮你接住，再帮你慢慢看清。',
        '它来自一个很简单的判断：很多人不是没有想法，而是想法来得太快、太散、太容易消失。尤其在 ADHD 或高刺激环境里，真正需要的往往不是更强控制，而是更轻的承接。'
      ],
      principlesTitle: '这个产品在守护什么',
      principles: [
        {
          title: '先捕捉，再判断',
          body: '新念头先以 bubble 的形式出现，不要求你立刻分类、命名或决定价值。先留下，再回看。'
        },
        {
          title: '让整理像物理变化，而不是行政流程',
          body: '当一个想法值得保留，你只需要长按，让它从 bubble 凝结为 glass。整理被做成一个可感知的动作，而不是一套表单。'
        },
        {
          title: '允许消散，也允许删除',
          body: '没有被继续照看的 bubble 会在 24 小时后自然蒸发；已经凝结的 glass 也可以被主动打破。系统不逼你囤积一切。'
        }
      ],
      flowTitle: '典型使用流',
      flow: [
        {
          title: '1. 快速落点',
          body: '点右下角加号，输入刚刚冒出来的句子，它会直接进入 bubble 区，保留漂浮和未完成的状态。'
        },
        {
          title: '2. 从漂浮到凝结',
          body: '当你觉得某个想法值得留下，长按它。它会飞入下方的 glass 区，成为时间线上可回看的卡片。'
        },
        {
          title: '3. 从存放到释放',
          body: '不再需要的内容可以双击 bubble 删除，或三击 glass 打破。保留与放下都被设计成明确而轻的选择。'
        }
      ],
      featureTitle: '当前核心能力',
      features: [
        'Bubble 区采用漂浮式布局，适合承接尚未定型的微想法',
        'Glass 区按时间形成双列瀑布流，便于回看已经“凝结”的想法',
        '支持快速记录、长按凝结、双击销毁、三击打破等轻交互',
        '24 小时自然蒸发机制与本地持久化并存，减少囤积压力'
      ],
      audienceTitle: '适合这样的人',
      audience: [
        '脑中经常同时出现很多念头，但来不及整理的人',
        '想记录灵感，却不想一打开应用就进入管理压力的人',
        '需要更贴近 ADHD 节奏的轻量记录方式，而不是强控制系统的人'
      ],
      legalTitle: '法律文档',
      legalIntro: '法律文档将在产品公开发布前补充。',
      legalPrivacyLabel: '隐私协议',
      legalTermsLabel: '使用条款'
    },
    en: {
      appId: 'light-ideas',
      slug: 'light-ideas',
      name: 'Light Ideas',
      altName: '轻想法',
      tagline: 'Give a thought somewhere to land before asking what it should become.',
      intro: 'A lightweight idea board for scattered thinking, designed to move thoughts from floating to condensed.',
      opening: [
        'Light Ideas is not a task manager and not another knowledge vault that pressures you to organize immediately. It is a transitional space that catches a thought first, then lets clarity arrive later.',
        'It comes from a simple observation: many people do not lack ideas. They lack a calm place for ideas that arrive too quickly, too loosely, and too briefly to hold. In ADHD-shaped attention, what helps is often not harder control, but lighter containment.'
      ],
      principlesTitle: 'What this product protects',
      principles: [
        {
          title: 'Capture first, evaluate later',
          body: 'New thoughts appear as bubbles. You are not asked to classify, rename, or justify them on arrival. First keep them, then revisit.'
        },
        {
          title: 'Make organization feel physical, not bureaucratic',
          body: 'When an idea is worth keeping, a long press condenses it from bubble to glass. Structuring becomes a felt motion, not a paperwork ritual.'
        },
        {
          title: 'Allow fading, allow release',
          body: 'Unattended bubbles evaporate after 24 hours. Condensed glass can also be intentionally broken. The system does not force you to archive everything.'
        }
      ],
      flowTitle: 'Typical use flow',
      flow: [
        {
          title: '1. Quick landing',
          body: 'Tap the bottom-right plus button and write the thought that just appeared. It enters the bubble zone in its unfinished form.'
        },
        {
          title: '2. From floating to condensed',
          body: 'When a thought deserves to stay, long-press it. It flies into the lower glass zone and becomes a card in the timeline.'
        },
        {
          title: '3. From storage to release',
          body: 'Bubble items can be removed with a double tap. Glass items can be broken with repeated taps. Keeping and letting go are both treated as lightweight choices.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'A floating bubble zone for unfinished micro-thoughts',
        'A dual-column glass timeline for condensed ideas you want to revisit',
        'Quick capture, long-press condense, double-tap destroy, and break interactions',
        '24-hour evaporation plus local persistence to reduce accumulation pressure'
      ],
      audienceTitle: 'Who this is for',
      audience: [
        'People whose minds generate many small thoughts at once',
        'People who want to keep sparks without entering an immediate management workflow',
        'People looking for a gentler, ADHD-friendly capture rhythm instead of a control-heavy system'
      ],
      legalTitle: 'Legal Documents',
      legalIntro: 'Legal documents will be added before the public release.',
      legalPrivacyLabel: 'Privacy Policy',
      legalTermsLabel: 'Terms of Use'
    }
  }
};

const appProfiles: AppProfileDefinition[] = [sunnyBreathProfile, lightIdeasProfile];

export function getAppProfile(locale: Locale, slug: string): AppProfile | null {
  const found = appProfiles.find((item) => item.slug === slug);
  if (!found) return null;
  return found.content[locale];
}

export function getAppProfileStaticPaths(locale: Locale) {
  return appProfiles
    .filter((item) => (item.routeStyle ?? 'apps') === 'apps')
    .map((item) => ({
      params: { app: item.slug },
      props: { profile: item.content[locale] }
    }));
}

export function getProfilePath(locale: Locale, appId: string): string | null {
  const found = appProfiles.find((item) => item.appId === appId);
  if (!found) return null;
  if ((found.routeStyle ?? 'apps') === 'standalone') {
    return locale === 'zh' ? `/${found.slug}` : `/en/${found.slug}`;
  }
  if (locale === 'zh') return `/apps/${found.slug}`;
  return `/en/apps/${found.slug}`;
}

export function getAppProfileById(locale: Locale, appId: string): AppProfile | null {
  const found = appProfiles.find((item) => item.appId === appId);
  if (!found) return null;
  return found.content[locale];
}
