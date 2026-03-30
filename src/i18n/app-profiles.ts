import type { Locale } from './utils';

interface SectionPoint {
  title: string;
  body: string;
}

interface FlowStep {
  title: string;
  body: string;
}

interface ShowcaseImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ShowcaseGroup {
  title: string;
  intro?: string;
  images: ShowcaseImage[];
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
  showcaseImages?: ShowcaseImage[];
  showcaseGroups?: ShowcaseGroup[];
  storeUrl?: string;
  storeLabel?: string;
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
      intro: '一个温和的中断应用，在你快要重新点开那些最难停下来的 App 时，先留出一个还能自己决定的停顿。',
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
      flowTitle: '使用起来会是这样',
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
      featureTitle: '它会怎样支持你',
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
      legalTitle: '隐私与条款',
      legalIntro: '隐私说明和使用条款都整理在这里。',
      legalPrivacyLabel: '隐私协议',
      legalTermsLabel: '使用条款',
      storeUrl: 'https://apps.apple.com/us/app/craving-cat-screen-time/id6760655833',
      storeLabel: '前往 App Store',
      showcaseTitle: 'App Store 展示图',
      showcaseIntro: '这些画面来自简体中文 App Store 页面，也把产品真正关心的几个时刻放在同一页里。',
      showcaseImages: [
        {
          src: '/images/craving-cat/invitation.png',
          alt: '成瘾猫动态预览：三花猫的轻陪伴画面'
        }
      ],
      showcaseGroups: [
        {
          title: '简体中文 App Store 展示图',
          intro: '顺序与商店页保持一致。',
          images: [
            {
              src: '/images/craving-cat/store/zh-Hans/01_home-companion.png',
              alt: '成瘾猫简体中文宣传图 1：在滑下去之前，先被温柔接住',
              caption: '在滑下去之前，先被温柔接住'
            },
            {
              src: '/images/craving-cat/store/zh-Hans/02_select-apps.png',
              alt: '成瘾猫简体中文宣传图 2：先从最容易停不下来的 App 开始',
              caption: '先从最容易停不下来的 App 开始'
            },
            {
              src: '/images/craving-cat/store/zh-Hans/03_tune-rules.png',
              alt: '成瘾猫简体中文宣传图 3：为每个 App 设一个更稳的节律',
              caption: '为每个 App 设一个更稳的节律'
            },
            {
              src: '/images/craving-cat/store/zh-Hans/04_intervention.png',
              alt: '成瘾猫简体中文宣传图 4：在冲动最强的时候，轻一点拦住你',
              caption: '在冲动最强的时候，轻一点拦住你'
            },
            {
              src: '/images/craving-cat/store/zh-Hans/05_breathing.png',
              alt: '成瘾猫简体中文宣传图 5：长按猫猫，先做一轮呼吸',
              caption: '长按猫猫，先做一轮呼吸'
            },
            {
              src: '/images/craving-cat/store/zh-Hans/06_paywall.png',
              alt: '成瘾猫简体中文宣传图 6：设置始终免费，想继续时再解锁',
              caption: '设置始终免费，想继续时再解锁'
            }
          ]
        }
      ]
    },
    en: {
      appId: 'craving-cat',
      slug: 'craving-cat',
      name: 'Craving Cat',
      altName: '成瘾猫',
      tagline: 'A pause that feels like company, not punishment.',
      intro: 'A gentle interruption app that leaves a real pause before the apps you reopen on impulse, so the next step can still be yours.',
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
      flowTitle: 'How it feels in use',
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
      featureTitle: 'How it supports you',
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
      legalTitle: 'Privacy & Terms',
      legalIntro: 'Privacy details and terms are gathered here.',
      legalPrivacyLabel: 'Privacy Policy',
      legalTermsLabel: 'Terms of Use',
      storeUrl: 'https://apps.apple.com/us/app/craving-cat-screen-time/id6760655833',
      storeLabel: 'View on the App Store',
      showcaseTitle: 'App Store gallery',
      showcaseIntro: 'These images come from the published English App Store page and show the moments the product is built around.',
      showcaseImages: [
        {
          src: '/images/craving-cat/invitation.png',
          alt: 'Craving Cat animated preview featuring a calm calico cat'
        }
      ],
      showcaseGroups: [
        {
          title: 'English App Store images',
          intro: 'Shown in the same order as the App Store listing.',
          images: [
            {
              src: '/images/craving-cat/store/en-US/01_home-companion.png',
              alt: 'Craving Cat English screenshot 1: a gentler pause before the spiral',
              caption: 'A gentler pause before the spiral'
            },
            {
              src: '/images/craving-cat/store/en-US/02_select-apps.png',
              alt: 'Craving Cat English screenshot 2: start with the apps that pull you in',
              caption: 'Start with the apps that pull you in'
            },
            {
              src: '/images/craving-cat/store/en-US/03_tune-rules.png',
              alt: 'Craving Cat English screenshot 3: shape a rhythm for each app',
              caption: 'Shape a rhythm for each app'
            },
            {
              src: '/images/craving-cat/store/en-US/04_intervention.png',
              alt: 'Craving Cat English screenshot 4: interrupt the urge without shouting',
              caption: 'Interrupt the urge without shouting'
            },
            {
              src: '/images/craving-cat/store/en-US/05_breathing.png',
              alt: 'Craving Cat English screenshot 5: long-press the cat to breathe',
              caption: 'Long-press the cat to breathe'
            },
            {
              src: '/images/craving-cat/store/en-US/06_paywall.png',
              alt: 'Craving Cat English screenshot 6: keep setup free, unlock when ready',
              caption: 'Keep setup free, unlock when ready'
            }
          ]
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
      flowTitle: '使用起来会是这样',
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
      featureTitle: '它会怎样支持你',
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
      legalTitle: '隐私与条款',
      legalIntro: '正式对外时，隐私说明和使用条款会放在这里。',
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
      featureTitle: 'How it supports you',
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
      legalTitle: 'Privacy & Terms',
      legalIntro: 'When Anchor Now is ready to launch, privacy details and terms will live here.',
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
      featureTitle: '它会怎样支持你',
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
      legalTitle: '隐私与条款',
      legalIntro: '这里可以查看 Sunny Breath 的隐私说明和使用条款。',
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
      featureTitle: 'How it supports you',
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
      legalTitle: 'Privacy & Terms',
      legalIntro: 'You can find Sunny Breath privacy details and terms here.',
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
      tagline: '让快而碎的念头，先有一个轻轻落下的地方。',
      intro: '一个本地优先的安静想法板：先把念头放进 Bubble，再把值得留下的凝成 Glass，其余的，不必勉强。',
      opening: [
        '轻想法不是待办清单，也不是第二个催你立刻分类的知识库。它更像一块有呼吸感的想法板，让念头先被接住，再决定要不要沉淀。',
        '它来自一个很具体的现实：很多人不是缺少想法，而是想法来得太快、太碎、太容易从手边滑走。尤其在 ADHD 节奏或高刺激环境里，真正有帮助的常常不是更强控制，而是先给它一个轻一点的落点。'
      ],
      principlesTitle: '这个产品在守护什么',
      principles: [
        {
          title: '先接住，再决定',
          body: '新念头先以 Bubble 留在上方，不要求你一出现就命名、归档、判断价值。先让它落下，再看它要不要继续留下。'
        },
        {
          title: '让整理像材质变化，而不是行政流程',
          body: '真正重要的内容，可以长按从 Bubble 凝成 Glass，落到下方时间线上。整理不再像填表，而像一块材料慢慢定型。'
        },
        {
          title: '允许未完成，也允许散去',
          body: '没有被继续照看的 Bubble 会按设定自然淡去；已经留下的 Glass 也可以主动删除。不是每个念头都要变成项目，也不是每个火花都要永远保存。'
        }
      ],
      flowTitle: '典型使用流',
      flow: [
        {
          title: '1. 先把念头放进 Bubble',
          body: '点右下角加号，写下刚刚冒出来的那句想法。它会先停留在上方的 Bubble 区，不需要立刻整理成“正确的笔记”。'
        },
        {
          title: '2. 值得留下的，再凝成 Glass',
          body: '当某个念头开始清晰，长按它，它会飞入下方的 Glass 区，成为可以回看的卡片。新鲜感与沉淀感，被分成两个不同空间。'
        },
        {
          title: '3. 调整节奏，也允许放下',
          body: '你可以拖动上下分区比例，设置 Bubble 的停留时长，切换材质和配色。需要释放时，也能用简单手势删掉内容，让空间重新变轻。'
        }
      ],
      featureTitle: '它会怎样支持你',
      features: [
        '上方 Bubble 区留给刚出现、还未成形的念头，下方 Glass 区留给你想继续回看的内容',
        'Bubble 可长按凝结，双击删除；Glass 可直接删除，让保留和放手都足够简单',
        'Bubble 停留时长可设为 24 / 48 / 72 小时，让没被继续照看的内容自然淡去',
        '免费版保持轻量；iOS 终身会员可解锁无限 Bubble、全部材质、全部配色与自定义配色'
      ],
      audienceTitle: '适合这样的人',
      audience: [
        '脑中经常同时冒出很多小念头，但普通笔记太重的人',
        '想保留灵感，却不想一打开应用就进入管理压力的人',
        '更适合 ADHD 节奏、需要轻承接而不是强整理的人',
        '写作者、设计师、创作者，或任何不想错过小火花的人'
      ],
      legalTitle: '隐私与条款',
      legalIntro: '隐私说明和使用条款都整理在这里。',
      legalPrivacyLabel: '隐私协议',
      legalTermsLabel: '使用条款',
      storeUrl: 'https://apps.apple.com/us/app/light-ideas-thought-board/id6760224660',
      storeLabel: '前往 App Store',
      showcaseTitle: 'App Store 展示图',
      showcaseIntro: '这些是简体中文 App Store 页面里的正式展示图，也能先让你看见它的真实节奏。',
      showcaseImages: [
        {
          src: '/images/light-ideas/icon.png',
          alt: '轻想法应用图标'
        }
      ],
      showcaseGroups: [
        {
          title: '简体中文 App Store 展示图',
          intro: '顺序与商店页保持一致。',
          images: [
            {
              src: '/images/light-ideas/store/zh-Hans/01_catch-thoughts.png',
              alt: '轻想法简体中文宣传图 1：接住念头',
              caption: '先接住，不急着整理'
            },
            {
              src: '/images/light-ideas/store/zh-Hans/02_settle-into-glass.png',
              alt: '轻想法简体中文宣传图 2：沉入 Glass',
              caption: '让重要的慢慢沉入 Glass'
            },
            {
              src: '/images/light-ideas/store/zh-Hans/03_browse-glass-timeline.png',
              alt: '轻想法简体中文宣传图 3：浏览 Glass 时间线',
              caption: '从时间线上回看已经留下的内容'
            },
            {
              src: '/images/light-ideas/store/zh-Hans/04_shape-your-space.png',
              alt: '轻想法简体中文宣传图 4：整理空间',
              caption: '调整上下空间，让节奏更合身'
            },
            {
              src: '/images/light-ideas/store/zh-Hans/05_materials-and-palettes.png',
              alt: '轻想法简体中文宣传图 5：材质与配色',
              caption: '在材质和配色里找到更顺手的氛围'
            },
            {
              src: '/images/light-ideas/store/zh-Hans/06_custom-color-templates.png',
              alt: '轻想法简体中文宣传图 6：自定义颜色模板',
              caption: '留下你自己的颜色模板'
            }
          ]
        }
      ]
    },
    en: {
      appId: 'light-ideas',
      slug: 'light-ideas',
      name: 'Light Ideas',
      altName: '轻想法',
      tagline: 'A softer landing place for fast, fragile thoughts.',
      intro: 'A local-first thought board that lets ideas arrive as Bubbles, settle into Glass when they matter, and leave without guilt when they do not.',
      opening: [
        'Light Ideas is not a task manager and not another vault that pressures you to organize on arrival. It is a quieter board where thoughts can land before they have to make sense.',
        'It begins from a specific observation: many people do not lack ideas. They lack a calm place for ideas that arrive too quickly, too loosely, and too briefly to hold. In ADHD-shaped attention, what helps is often not harder control, but gentler containment.'
      ],
      principlesTitle: 'What this product protects',
      principles: [
        {
          title: 'Catch first, decide later',
          body: 'New thoughts stay in the upper Bubble area first. You do not have to classify, rename, or justify them at the moment they appear.'
        },
        {
          title: 'Let structure feel material, not bureaucratic',
          body: 'When an idea deserves to stay, a long press condenses it from Bubble into Glass and lets it settle below. Organization feels like a material shift, not paperwork.'
        },
        {
          title: 'Allow unfinished thoughts to fade',
          body: 'Bubbles can expire on their own. Glass items can be removed when you no longer want them. Not every thought has to become a project, and not every spark has to stay forever.'
        }
      ],
      flowTitle: 'How it feels in use',
      flow: [
        {
          title: '1. Drop the thought into Bubble',
          body: 'Tap the bottom-right plus button and catch the thought while it is still fresh. It stays in the upper Bubble space without needing immediate structure.'
        },
        {
          title: '2. Condense what matters into Glass',
          body: 'When something becomes worth keeping, long-press it. It flies downward into the Glass timeline and turns into a calmer card you can return to later.'
        },
        {
          title: '3. Adjust the pace and release the rest',
          body: 'You can tune the Bubble/Glass ratio, choose how long Bubbles stay alive, and shift the material or palette. When something no longer needs to stay, a simple gesture lets it go.'
        }
      ],
      featureTitle: 'How it supports you',
      features: [
        'A freer upper Bubble space for fresh thoughts and a calmer lower Glass space for the ones you want to keep',
        'Long-press to condense, simple gestures to remove, and a board that treats keeping and releasing as equally valid choices',
        'Set Bubble lifetime to 24 / 48 / 72 hours so unattended thoughts can fade without building pressure',
        'The free version stays light; the iOS lifetime unlock opens unlimited bubbles, all materials, all palettes, and custom palettes'
      ],
      audienceTitle: 'Who this is for',
      audience: [
        'People whose minds generate many small thoughts at once',
        'People who want to keep sparks without entering a management workflow too early',
        'People looking for a gentler, ADHD-friendly capture rhythm instead of a control-heavy notes system',
        'Writers, designers, makers, and anyone who loses small sparks too easily'
      ],
      legalTitle: 'Privacy & Terms',
      legalIntro: 'Privacy details and terms are gathered here.',
      legalPrivacyLabel: 'Privacy Policy',
      legalTermsLabel: 'Terms of Use',
      storeUrl: 'https://apps.apple.com/us/app/light-ideas-thought-board/id6760224660',
      storeLabel: 'View on the App Store',
      showcaseTitle: 'App Store gallery',
      showcaseIntro: 'These are the English App Store images from the published listing, so you can see the product in its real rhythm.',
      showcaseImages: [
        {
          src: '/images/light-ideas/icon.png',
          alt: 'Light Ideas app icon'
        }
      ],
      showcaseGroups: [
        {
          title: 'English App Store images',
          intro: 'Shown in the same order as the App Store listing.',
          images: [
            {
              src: '/images/light-ideas/store/en-US/01_catch-thoughts.png',
              alt: 'Light Ideas English screenshot 1: catch thoughts',
              caption: 'Catch the thought first'
            },
            {
              src: '/images/light-ideas/store/en-US/02_settle-into-glass.png',
              alt: 'Light Ideas English screenshot 2: settle into Glass',
              caption: 'Let what matters settle into Glass'
            },
            {
              src: '/images/light-ideas/store/en-US/03_browse-glass-timeline.png',
              alt: 'Light Ideas English screenshot 3: browse the Glass timeline',
              caption: 'Return to what you kept on the timeline'
            },
            {
              src: '/images/light-ideas/store/en-US/04_shape-your-space.png',
              alt: 'Light Ideas English screenshot 4: shape your space',
              caption: 'Shape the space until it feels like yours'
            },
            {
              src: '/images/light-ideas/store/en-US/05_materials-and-palettes.png',
              alt: 'Light Ideas English screenshot 5: materials and palettes',
              caption: 'Find a material and palette that feels right'
            },
            {
              src: '/images/light-ideas/store/en-US/06_custom-color-templates.png',
              alt: 'Light Ideas English screenshot 6: custom color templates',
              caption: 'Save color templates that feel like home'
            }
          ]
        }
      ]
    }
  }
};

const appProfiles: AppProfileDefinition[] = [
  lightIdeasProfile,
  cravingCatProfile,
  anchorNowProfile,
  sunnyBreathProfile
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
