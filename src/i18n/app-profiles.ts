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
      intro: '一个把冲动时刻变得更可选择的温和中断应用，用猫猫陪伴替代羞辱式防沉迷。',
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
          body: '每一次提醒、每一个按钮、每一段陪伴都尽量避开羞耻语言。即使你选择“再给一点时间”，产品也不把这次判断成失败。'
        },
        {
          title: '规则可以细，感受要轻',
          body: '你可以为不同习惯设置不同边界，但界面和语言都保持温和，不把限制做成压迫感。'
        }
      ],
      flowTitle: '典型使用流',
      flow: [
        {
          title: '1. 找到最容易滑进去的入口',
          body: '先选出那些最容易让你失去时间感的入口。不是为了把一切都关掉，而是先看见真正需要帮助的地方。'
        },
        {
          title: '2. 设定轻规则',
          body: '为不同习惯设置更合身的边界：今天可以多久、一次别太久、如果真的需要还能再给一点空间。不需要一下子把所有入口都管住。'
        },
        {
          title: '3. 冲动来时先被猫猫叫住',
          body: '当你快要滑回惯性，成瘾猫会先轻轻叫住你。你可以再给一点时间、这次先放下，或者进入猫猫陪伴与一次呼吸，把注意力慢慢拿回来。'
        }
      ],
      featureTitle: '当前核心能力',
      features: [
        '可以为不同习惯设置不同边界，而不是只给一条粗暴总规则',
        '提醒、放下、再给一点时间，都被做成更温和的选择，而不是羞耻测试',
        '猫猫陪伴与一次呼吸把冲动时刻变成一个还能慢下来的空档',
        '记录默认尽量留在你自己这边，体验轻量，也更安静'
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
          src: '/images/craving-cat/invitation.png',
          alt: '成瘾猫动态预览：三花猫的轻陪伴画面'
        }
      ]
    },
    en: {
      appId: 'craving-cat',
      slug: 'craving-cat',
      name: 'Craving Cat',
      altName: '成瘾猫',
      tagline: 'A pause that feels like company, not punishment.',
      intro: 'A gentle interruption app that makes craving moments more choosable, using cat companionship instead of shame-based blocking.',
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
          body: 'Every reminder, button, and companion moment avoids shame. Even “a little more time” is treated as a choice, not a moral failure.'
        },
        {
          title: 'Detailed rules, light emotional load',
          body: 'Different habits can carry different boundaries, while the interface stays soft, calm, and non-threatening.'
        }
      ],
      flowTitle: 'Typical use flow',
      flow: [
        {
          title: '1. Notice where time disappears',
          body: 'Start by choosing the places where your sense of time most often slips. The goal is not to close everything, but to notice where support is actually needed.'
        },
        {
          title: '2. Set light rules',
          body: 'Shape boundaries that fit each habit: how long feels okay today, how long is too long at once, and when you may still want a little room. You do not need to clamp down on everything at once.'
        },
        {
          title: '3. Let the cat catch the moment',
          body: 'When the moment starts to speed up, the cat catches it first. You can allow a little more time, put it down for now, or take one guided breath before choosing again.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'Set different boundaries for different habits instead of relying on one blunt limit',
        'Make “pause,” “put it down,” and “a little more time” feel like calm choices instead of moral tests',
        'Use cat companionship and one guided breath to turn a craving spike into a slower moment',
        'Keep the experience quiet and mostly on your own device, with less noise around it'
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
          src: '/images/craving-cat/invitation.png',
          alt: 'Craving Cat animated preview featuring a calm calico cat'
        }
      ]
    }
  }
};

const anchorNowProfile: AppProfileDefinition = {
  appId: 'anchor-now',
  slug: 'anchor-now',
  routeStyle: 'apps',
  content: {
    zh: {
      appId: 'anchor-now',
      slug: 'anchor-now',
      name: '此刻锚',
      altName: 'Anchor Now',
      tagline: '先稳住，再处理。把恐慌、焦躁和走神拆成可执行的最小介入。',
      intro: '一个围绕恐慌、焦躁和走神三种场景构建的低负担介入工具，把支持做成一键可用的私人缓解流程。',
      opening: [
        '此刻锚不是又一个让你更努力的工具。它先把人稳住，再决定该做什么。',
        '当身体过载、思绪散开，或注意力已经开始漂移时，它提供的是一个足够轻的入口：选一个状态，落到一个模板，直接进入下一步。'
      ],
      principlesTitle: '这个产品在守护什么',
      principles: [
        {
          title: '先稳定，再处理',
          body: '先把身体和感受拉回到可以呼吸的范围，再去面对问题本身。'
        },
        {
          title: '三种状态足够',
          body: '恐慌、焦躁、走神已经覆盖了很多高负担时刻，不需要把系统做得更复杂。'
        },
        {
          title: '入口离你更近',
          body: '把最常用的支持入口放在最容易触达的位置，让帮助离你更近。'
        }
      ],
      flowTitle: '典型使用流',
      flow: [
        {
          title: '1. 选择状态',
          body: '从恐慌、焦躁、走神里选一个最接近此刻的场景，直接进入对应模板。'
        },
        {
          title: '2. 调整步骤',
          body: '把呼吸、落地、清单和计时重新拼成你更顺手的私人缓解流程。'
        },
        {
          title: '3. 一键触发',
          body: '通过桌面入口或应用内快捷入口，快速进入需要的流程，而不是先绕一大圈。'
        }
      ],
      featureTitle: '当前核心能力',
      features: [
        '三种状态模板：恐慌、焦躁、走神，围绕最常见的过载场景做最小化介入',
        '把呼吸、感官落地、行动清单、定锚计时等步骤拼成自己的支持流程',
        '让帮助入口留在最容易触达的地方，过载时不用先绕很多步',
        '模板可以反复调整、重排与沿用，轻量但不是一次性的'
      ],
      audienceTitle: '适合这样的人',
      audience: [
        '在焦虑、恐慌或注意力游离时，需要一个立即可用的缓冲入口的人',
        '不想面对复杂流程，只想先把自己稳住的人',
        '希望支持工具尊重自主，而不是制造更多压力的人'
      ],
      legalTitle: '法律文档',
      legalIntro: '隐私协议和使用条款页面已预留，后续可直接补成正式版本。',
      legalPrivacyLabel: '隐私协议',
      legalTermsLabel: '使用条款',
      showcaseImages: [
        {
          src: '/images/anchor-now/icon.png',
          alt: 'Anchor Now app icon featuring blue geometric anchor mark'
        }
      ]
    },
    en: {
      appId: 'anchor-now',
      slug: 'anchor-now',
      name: 'Anchor Now',
      altName: '此刻锚',
      tagline: 'Steady first, then handle the rest. Break panic, anxiety, and drift into actionable micro-interventions.',
      intro: 'A low-load intervention tool built around panic, anxiety, and drift, turning support into a one-tap personal relief flow.',
      opening: [
        'Anchor Now is not another tool that asks you to try harder. It steadies the person first, then decides what comes next.',
        'When the body is overloaded, thoughts are scattering, or attention has already started to drift, it offers a light entry point: pick a state, land in a template, and move straight into the next step.'
      ],
      principlesTitle: 'What this product protects',
      principles: [
        {
          title: 'Steady first, then handle',
          body: 'Bring the body and nervous system back within reach before dealing with the problem itself.'
        },
        {
          title: 'Three states are enough',
          body: 'Panic, anxiety, and drift already cover a large share of overwhelming moments. The system does not need more complexity.'
        },
        {
          title: 'Keep the entry close',
          body: 'Place the most useful support entry where it is easiest to reach, so help stays close.'
        }
      ],
      flowTitle: 'Typical use flow',
      flow: [
        {
          title: '1. Choose a state',
          body: 'Pick the closest match from panic, anxiety, or drift and enter the matching template right away.'
        },
        {
          title: '2. Tune the steps',
          body: 'Recombine breathing, grounding, checklists, and timers into a personal relief flow that feels easier to follow.'
        },
        {
          title: '3. Trigger instantly',
          body: 'Use the home screen entry or the in-app shortcut to open the right flow without extra steps.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'Three state templates for panic, anxiety, and drift, covering the most common overload moments',
        'Shape breathing, grounding, checklists, and anchor-timers into a support flow that feels personal',
        'Keep help close to the point of need, so overload does not have time to build',
        'Return to the same templates, adjust them, and keep what already works'
      ],
      audienceTitle: 'Who this is for',
      audience: [
        'People who need an immediate buffer when anxiety, panic, or drifting attention hits',
        'People who do not want to face a complex workflow when they are already overwhelmed',
        'People who want support tools that respect autonomy instead of adding pressure'
      ],
      legalTitle: 'Legal Documents',
      legalIntro: 'Privacy and terms pages are already reserved and can be turned into formal legal text later.',
      legalPrivacyLabel: 'Privacy Policy',
      legalTermsLabel: 'Terms of Use',
      showcaseImages: [
        {
          src: '/images/anchor-now/icon.png',
          alt: 'Anchor Now app icon featuring a blue geometric anchor mark'
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
        '记录默认尽量留在自己这边，整体体验轻量，也不制造新的负担'
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
        'Keep most of the experience quiet and close to you, without turning morning support into another burden'
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
      intro: '一个先接住、再慢慢归拢、最后也允许放手的轻量想法板，专门处理那些来得太快、太碎、太容易消失的念头。',
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
          body: '没有被继续照看的念头会自然淡去；已经留下的也可以主动放手。系统不逼你囤积一切。'
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
        '上方是更自由的漂浮区，下方是更安定的留存区，让想法先落地再慢慢归位',
        '值得留下的可以长按沉淀，不需要的也能轻轻放手',
        '没有被继续照看的念头会自然淡去，减少“什么都要留着”的压力',
        '界面氛围可以切换，让记录空间更贴近你当下的状态'
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
      intro: 'A lightweight thought board that catches first, settles later, and still allows release when a thought no longer needs to stay.',
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
          body: 'When an idea is worth keeping, a long press condenses it from Bubble to Glass and lets it settle into the lower space. Structuring becomes a felt motion, not a paperwork ritual.'
        },
        {
          title: 'Allow fading, allow release',
          body: 'Thoughts that are not revisited can fade on their own. Saved ones can also be released intentionally. The system does not force you to archive everything.'
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
          body: 'When a thought deserves to stay, long-press it. It flies into the lower Glass zone and becomes a card you can come back to.'
        },
        {
          title: '3. From storage to release',
          body: 'Bubble items can be removed with a double tap. Glass items can be broken with repeated taps. Keeping and letting go are both treated as lightweight choices.'
        }
      ],
      featureTitle: 'Current core capabilities',
      features: [
        'A freer upper space for fresh thoughts and a calmer lower space for the ones you want to keep',
        'Let thoughts settle when they matter, and let them go without drama when they do not',
        'Reduce the pressure to keep everything by allowing some thoughts to fade on their own',
        'Shift the atmosphere of the board so the space feels closer to your state of mind'
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

const appProfiles: AppProfileDefinition[] = [
  anchorNowProfile,
  cravingCatProfile,
  sunnyBreathProfile,
  lightIdeasProfile
];

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
