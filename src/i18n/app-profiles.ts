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

const cravingCatProfile: AppProfileDefinition = {
  appId: 'craving-cat',
  slug: 'craving-cat',
  routeStyle: 'apps',
  content: {
    zh: {
      appId: 'craving-cat',
      slug: 'craving-cat',
      name: '成瘾猫',
      altName: 'Craving Cat',
      tagline: '让暂停更像被陪着，而不是被惩罚。',
      intro: '一个基于 iOS Screen Time 原生能力的温和冲动中断应用，用猫猫陪伴替代羞辱式防沉迷。',
      opening: [
        '成瘾猫不是为了把你“管住”，而是为了在冲动开始加速前，先轻轻把你接住。',
        '它不做羞耻排行榜，也不把人当成需要被修正的对象。它只在你快要滑回惯性时，留出一个真实、温柔、还能自己决定下一步的停顿。'
      ],
      principlesTitle: '这个产品在守护什么',
      principles: [
        {
          title: '先打断冲动，再归还选择',
          body: '守护的目标不是让你服从规则，而是让那个几乎没有意识的自动动作，重新变成一个可以被看见的选择。'
        },
        {
          title: '像陪伴，不像惩罚',
          body: 'Shield 文案、豁免按钮和猫猫陪伴页都避免羞耻语言。即使你选择“再给一点时间”，产品也不把这次判断成失败。'
        },
        {
          title: '规则可以细，感受要轻',
          body: '你可以按 App 单独设置每日总量、单次上限和单次豁免时间，但界面和语言都保持温和，不把限制做成压迫感。'
        }
      ],
      flowTitle: '典型使用流',
      flow: [
        {
          title: '1. 授权并选择对象',
          body: '先完成 iOS Screen Time 授权，再用官方 Family Activity Picker 选出最容易让你失去时间感的 App、分类或网站。'
        },
        {
          title: '2. 设定轻规则',
          body: '按 App 逐个设置每日总量、单次连续使用上限和单次豁免时间，不需要一下子把所有入口都管住。'
        },
        {
          title: '3. 冲动来时先被猫猫叫住',
          body: '当阈值触发，系统弹出 Shield。你可以再给一点时间、这次先放下，或者进入猫猫陪伴与一次呼吸，把注意力慢慢拿回来。'
        }
      ],
      featureTitle: '当前核心能力',
      features: [
        'Flutter MVP + 原生 iOS Screen Time 栈：FamilyControls、DeviceActivity、ManagedSettings',
        '支持按 App 单独配置每日总量、单次上限与单次豁免时间，而不是只给一组粗暴总规则',
        '内置 Shield 调试预览、猫猫陪伴页与呼吸 Sheet，可先在 App 内验证文案和介入体验',
        '使用 App Group 共享存储连接主 App 与扩展；关键能力在真实 iPhone 上可跑通'
      ],
      audienceTitle: '适合这样的人',
      audience: [
        '容易在短视频、社交或购物 App 里失去时间感的人',
        '不想被“你又失败了”这类产品语言二次伤害的人',
        '需要温和边界、而不是强硬封锁或家长式控制的人'
      ],
      legalTitle: '法律文档',
      legalIntro: '隐私协议和使用条款页面已经预留，后续可以直接替换为正式版本。',
      legalPrivacyLabel: '隐私协议',
      legalTermsLabel: '使用条款',
      showcaseImages: [
        {
          src: '/images/craving-cat/cat-icon.png',
          alt: '成瘾猫图标：温和陪伴的三花猫形象'
        }
      ]
    },
    en: {
      appId: 'craving-cat',
      slug: 'craving-cat',
      name: 'Craving Cat',
      altName: '成瘾猫',
      tagline: 'A pause that feels like company, not punishment.',
      intro: 'A gentle impulse-interruption app built on native iOS Screen Time capabilities, using cat companionship instead of shame-based blocking.',
      opening: [
        'Craving Cat is not here to keep you under control. It is here to catch you right before the craving gains speed.',
        'It avoids shame dashboards and does not treat people like problems to be fixed. When autopilot is about to take over, it leaves a real, kind pause where your next step is still yours.'
      ],
      principlesTitle: 'What this product protects',
      principles: [
        {
          title: 'Interrupt the impulse, return the choice',
          body: 'The goal is not obedience. The goal is to make an almost unconscious action visible again, so a real choice can re-enter.'
        },
        {
          title: 'Companion, not punishment',
          body: 'Shield copy, exemption actions, and the cat companion flow all avoid shame. Even “allow a little more” is treated as a choice, not a moral failure.'
        },
        {
          title: 'Detailed rules, light emotional load',
          body: 'Each app can carry its own daily total, single-session limit, and one-time exemption window, while the interface stays soft and non-threatening.'
        }
      ],
      flowTitle: 'Typical use flow',
      flow: [
        {
          title: '1. Authorize and choose targets',
          body: 'Start with iOS Screen Time authorization, then use the official Family Activity Picker to choose the apps, categories, or domains most likely to blur your sense of time.'
        },
        {
          title: '2. Set light rules',
          body: 'Tune each app with its own daily total, single-session cap, and exemption window. You do not need to lock down everything at once.'
        },
        {
          title: '3. Let the cat catch the moment',
          body: 'When a threshold is reached, the native shield appears. You can allow a little more time, put it down for now, or open the cat companion and one guided breath.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'Flutter MVP backed by the native iOS Screen Time stack: FamilyControls, DeviceActivity, and ManagedSettings',
        'Per-app rule rows with daily totals, single-session caps, and one-time exemption windows instead of one blunt global limit',
        'Built-in shield preview, cat companion, and breathing sheet to tune the intervention experience before real native triggers',
        'App Group shared storage across the main app and extensions, with the core stack already wired for real-device testing'
      ],
      audienceTitle: 'Who this is for',
      audience: [
        'People who lose time easily inside short-form, social, or shopping apps',
        'People who do not want to be scolded by the very tool that is supposed to help',
        'People who need gentler boundaries instead of hard blocks or parental language'
      ],
      legalTitle: 'Legal Documents',
      legalIntro: 'Privacy and terms pages are already reserved here and can be swapped with the final legal text later.',
      legalPrivacyLabel: 'Privacy Policy',
      legalTermsLabel: 'Terms of Use',
      showcaseImages: [
        {
          src: '/images/craving-cat/cat-icon.png',
          alt: 'Craving Cat icon featuring a calm calico cat companion'
        }
      ]
    }
  }
};

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
      intro: '一个专门处理清晨 0-10 分钟启动阻力的低压唤醒应用。',
      opening: [
        'Sunny Breath 不把早晨当成一场需要立刻赢下来的比赛，而是先把你从慌张、迟疑和不想起身的瞬间接住。',
        '它关注“醒来后的第一步”，不是连续打卡的成绩。渐进音乐、1-3 个轻动作和极简情绪记录，共同把一天从刺耳的提醒改成可以重新进入的节奏。'
      ],
      principlesTitle: '这个产品在守护什么',
      principles: [
        {
          title: '低压启动，不靠惩罚',
          body: '应用避免 streak 焦虑、强制打卡和羞耻驱动。漏掉一天也没有惩罚，重点是让你愿意再次回来。'
        },
        {
          title: '先让身体醒来，再谈效率',
          body: '通过渐进音量、可选震动、轻动作和情绪记录，让神经系统先稳定，再进入一天的节奏。'
        },
        {
          title: '把复杂目标拆成可完成的小动作',
          body: '你只需要设置 1-3 个“醒来后第一件事”，例如喝水、开窗、坐在床边呼吸 10 次。门槛足够低，才能真的跨过启动阻力。'
        }
      ],
      flowTitle: '典型清晨流程（3-10 分钟）',
      flow: [
        {
          title: '1. 渐进唤醒',
          body: '本地音乐或内置音乐会在设定时段内渐进抬升音量，必要时可配合重复、震动和屏幕渐亮，降低被突兀铃声惊醒的不适感。'
        },
        {
          title: '2. 无压力动作',
          body: '完成一到三个轻动作，不追 KPI，也不允许把高负荷任务塞进来。它只负责帮你跨过“起身的第一道坎”。'
        },
        {
          title: '3. 状态记录',
          body: '用极简方式标记当下情绪，再决定结束流程。没有排名，没有红色警告，只是给自己一个可见的照面。'
        }
      ],
      featureTitle: '当前核心能力',
      features: [
        '首个流程可在约 90 秒内完成设置：时间、音乐、一个启动动作',
        '支持本地音乐与内置音乐，唤醒时长 3-20 分钟，循环、震动和渐亮可调',
        '轻量节律辅助包含固定起床时间提醒、可选睡前提示与逐步提前 15 分钟策略',
        '本地优先、低后端依赖，商业模式为 7 天试用 + 订阅 / 买断并存'
      ],
      audienceTitle: '适合这样的人',
      audience: [
        '作息容易漂移，早晨常常被“必须马上清醒”压住的人',
        '想建立规律，但不想再被打卡焦虑、自责叙事和强提醒消耗的人',
        '创作者、自由职业者、学生，以及任何更适合温和结构而非强推节奏的人'
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
      intro: 'A low-pressure wake app built specifically for the first 0-10 minutes of the morning.',
      opening: [
        'Sunny Breath does not treat mornings like a performance problem. It is built to catch you in the hesitant, overloaded moment right after waking.',
        'It cares more about your first step than your streak count. Gradual music, one to three tiny actions, and a minimal check-in turn the morning from something abrupt into something re-enterable.'
      ],
      principlesTitle: 'What this product protects',
      principles: [
        {
          title: 'Low-pressure start, no punishment loops',
          body: 'No shame mechanics, no streak anxiety, no forced check-ins. Missing a day is acceptable. Returning gently is the goal.'
        },
        {
          title: 'Regulate first, optimize later',
          body: 'Gradual audio, optional vibration, tiny wake actions, and mood logging help your nervous system settle before demand begins.'
        },
        {
          title: 'Tiny steps over heroic plans',
          body: 'Set 1-3 first actions after waking, such as water, opening the curtains, or ten bed-edge breaths. The structure stays intentionally light.'
        }
      ],
      flowTitle: 'A typical 3-10 minute morning flow',
      flow: [
        {
          title: '1. Gradual wake-up',
          body: 'Built-in or local audio ramps up over the chosen wake window, with repeat, vibration, and optional screen brightening available when needed.'
        },
        {
          title: '2. Low-pressure starter actions',
          body: 'Complete one to three gentle actions. No KPI, no heavy tasks. Just enough structure to cross the first resistance after waking.'
        },
        {
          title: '3. Mood check-in',
          body: 'Log your current state with minimal friction, then end the flow. No ranking, no punishment, just visibility.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'Set up your first flow in about 90 seconds: wake time, music, and one starter action',
        'Built-in music and local audio import, with 3-20 minute wake duration, repeat, vibration, and optional screen brightening',
        'Light rhythm support for fixed wake reminders, optional bedtime prompts, and gradual 15-minute shifts',
        'Local-first handling with low backend dependence, plus a 7-day trial and subscription or lifetime unlock'
      ],
      audienceTitle: 'Who this is for',
      audience: [
        'People whose sleep rhythm drifts and whose mornings feel immediately overwhelming',
        'People who want consistency without streak pressure, self-attack, or pushy wake tools',
        'Creators, freelancers, students, and anyone who responds better to gentle structure than brute force'
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
      tagline: '先接住，再凝结；不需要的，也可以让它自然消散。',
      intro: '一个围绕 Bubble -> Glass -> Break 构建的轻量想法板，专门处理那些来得太快、太碎、太容易消失的念头。',
      opening: [
        '轻想法不是待办清单，也不是第二个会催促你的知识库。它把“记录”设计成一个有材质感的过渡空间，先接住，再慢慢看清。',
        '它来自一个很简单的判断：很多人不是没有想法，而是想法来得太快、太散、太容易消失。尤其在 ADHD 或高刺激环境里，真正需要的往往不是更强控制，而是更轻的承接。'
      ],
      principlesTitle: '这个产品在守护什么',
      principles: [
        {
          title: '先捕捉，再判断',
          body: '新念头先以 Bubble 的形式出现，不要求你立刻分类、命名或决定价值。先留下，再回看。'
        },
        {
          title: '让整理像物理变化，而不是行政流程',
          body: '当一个想法值得保留，你只需要长按，让它从 Bubble 凝结为 Glass，并带着飞行动画落到下方时间线。整理被做成一个可感知的动作，而不是一套表单。'
        },
        {
          title: '允许消散，也允许删除',
          body: '没有被继续照看的 Bubble 会在 24 小时后自然蒸发；已经凝结的 Glass 也可以被主动打破。系统不逼你囤积一切。'
        }
      ],
      flowTitle: '典型使用流',
      flow: [
        {
          title: '1. 快速落点',
          body: '点右下角加号，输入刚刚冒出来的句子，它会直接进入 Bubble 区，保留漂浮和未完成的状态。'
        },
        {
          title: '2. 从漂浮到凝结',
          body: '当你觉得某个想法值得留下，长按它。它会飞入下方的 Glass 区，成为时间线上可回看的卡片。'
        },
        {
          title: '3. 从存放到释放',
          body: '不再需要的内容可以双击 Bubble 删除，或三击 Glass 打破。保留与放下都被设计成明确而轻的选择。'
        }
      ],
      featureTitle: '当前核心能力',
      features: [
        'Bubble 区采用漂浮式布局，Glass 区采用双列瀑布流，并支持拖拽分界线动态调整上下空间比例',
        '支持快速记录、长按凝结飞行动画、双击销毁 Bubble、三击打破 Glass',
        'Bubble 默认 24 小时自然蒸发，可选数量上限保护；Glass 时间线按时间增量懒加载',
        '材质系统与背景配色系统解耦，可切换 Clear Glass、Frosted Glass、Aurora Glass、Paper Light 等预设'
      ],
      audienceTitle: '适合这样的人',
      audience: [
        '脑中经常同时出现很多念头，但来不及整理的人',
        '想记录灵感，却不想一打开应用就进入管理压力和整理义务的人',
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
      tagline: 'Catch it first, condense it later, and let it go when it no longer needs to stay.',
      intro: 'A lightweight thought board built around Bubble -> Glass -> Break for ideas that arrive too quickly, too loosely, and too briefly.',
      opening: [
        'Light Ideas is not a task manager and not another knowledge vault that pressures you to organize immediately. It turns capture into a tactile, material transition: catch first, then let clarity arrive later.',
        'It comes from a simple observation: many people do not lack ideas. They lack a calm place for ideas that arrive too quickly, too loosely, and too briefly to hold. In ADHD-shaped attention, what helps is often not harder control, but lighter containment.'
      ],
      principlesTitle: 'What this product protects',
      principles: [
        {
          title: 'Capture first, evaluate later',
          body: 'New thoughts appear as Bubbles. You are not asked to classify, rename, or justify them on arrival. First keep them, then revisit.'
        },
        {
          title: 'Make organization feel physical, not bureaucratic',
          body: 'When an idea is worth keeping, a long press condenses it from Bubble to Glass with a visible flight into the lower timeline. Structuring becomes a felt motion, not a paperwork ritual.'
        },
        {
          title: 'Allow fading, allow release',
          body: 'Unattended Bubbles evaporate after 24 hours. Condensed Glass can also be intentionally broken. The system does not force you to archive everything.'
        }
      ],
      flowTitle: 'Typical use flow',
      flow: [
        {
          title: '1. Quick landing',
          body: 'Tap the bottom-right plus button and write the thought that just appeared. It enters the Bubble zone in its unfinished form.'
        },
        {
          title: '2. From floating to condensed',
          body: 'When a thought deserves to stay, long-press it. It flies into the lower Glass zone and becomes a card in the timeline.'
        },
        {
          title: '3. From storage to release',
          body: 'Bubble items can be removed with a double tap. Glass items can be broken with repeated taps. Keeping and letting go are both treated as lightweight choices.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'A floating Bubble zone and a dual-column Glass timeline, separated by a draggable divider that users can persist',
        'Quick capture, long-press condense flight, double-tap Bubble destroy, and repeated-tap Glass break interactions',
        '24-hour evaporation by default, optional Bubble limits, and incremental lazy loading for long-term Glass timelines',
        'Decoupled material and background systems with presets such as Clear Glass, Frosted Glass, Aurora Glass, and Paper Light'
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

const appProfiles: AppProfileDefinition[] = [cravingCatProfile, sunnyBreathProfile, lightIdeasProfile];

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
