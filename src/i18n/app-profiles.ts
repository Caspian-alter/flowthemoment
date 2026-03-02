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
  showcaseImages?: Array<{
    src: string;
    alt: string;
  }>;
}

interface AppProfileDefinition {
  appId: string;
  slug: string;
  content: Record<Locale, AppProfile>;
}

const sunnyBreathProfile: AppProfileDefinition = {
  appId: 'sunshine-breath',
  slug: 'sunny-breath',
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
      legalTitle: '法律与合规页面',
      legalIntro: '用于用户查阅与 App Store Connect 审核提交。',
      legalPrivacyLabel: '隐私协议',
      legalTermsLabel: '使用条款',
      showcaseTitle: '宣传图',
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
      legalTitle: 'Legal and compliance pages',
      legalIntro: 'Use these standalone URLs for user reference and App Store Connect review.',
      legalPrivacyLabel: 'Privacy Policy',
      legalTermsLabel: 'Terms of Use'
    }
  }
};

const appProfiles: AppProfileDefinition[] = [sunnyBreathProfile];

export function getAppProfile(locale: Locale, slug: string): AppProfile | null {
  const found = appProfiles.find((item) => item.slug === slug);
  if (!found) return null;
  return found.content[locale];
}

export function getAppProfileStaticPaths(locale: Locale) {
  return appProfiles.map((item) => ({
    params: { app: item.slug },
    props: { profile: item.content[locale] }
  }));
}

export function getProfilePath(locale: Locale, appId: string): string | null {
  const found = appProfiles.find((item) => item.appId === appId);
  if (!found) return null;
  if (locale === 'zh') return `/apps/${found.slug}`;
  return `/en/apps/${found.slug}`;
}
