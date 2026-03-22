import type { Locale } from './utils';

export type LegalDocType = 'privacy' | 'terms';

interface AppLegalDocumentSet {
  privacyTitle: string;
  privacyBody: string;
  termsTitle: string;
  termsBody: string;
}

interface LegalAppDefinition {
  id: string;
  slug: string;
  names: Record<Locale, string>;
  documents: Record<Locale, AppLegalDocumentSet>;
}

export interface AppLegalLinks {
  privacyLabel: string;
  termsLabel: string;
  privacyPath: string;
  termsPath: string;
}

export interface AppLegalPageData {
  appId: string;
  appSlug: string;
  appName: string;
  docType: LegalDocType;
  title: string;
  body: string;
}

const sunnyBreathDocs: Record<Locale, AppLegalDocumentSet> = {
  zh: {
    privacyTitle: '隐私协议',
    privacyBody: `版本号：v1.0
生效日期：2026-02-24
更新日期：2026-02-24

欢迎你使用「阳光呼吸（Sunny Breath）」。
本《隐私政策》用于说明开发者在你使用本应用时如何处理个人信息，以及你依法享有的相关权利。

一、开发者信息
开发者主体：个人开发者（非公司主体）
联系邮箱：landingfeather@163.com

二、我们处理的信息
1. 本地闹钟与流程数据：闹钟时间、标题、重复规则、音乐选择、唤醒动作、语言偏好、记录等（主要存储在你的设备本地）。
2. 反馈信息：你主动提交的反馈文本，以及必要技术元数据（语言、平台、系统版本、提交时间、来源）。
3. 系统权限状态：通知与 AlarmKit 等权限状态，用于实现提醒能力。

三、权限说明
通知权限、AlarmKit 相关能力、本地网络（Bonjour）、文件访问（仅你主动导入音频时）、后台音频能力，均仅用于对应功能实现。

四、存储与第三方服务
1. 本地存储：SharedPreferences 与应用沙盒文件。
2. 云端反馈：写入 Supabase（public.feedback_entries）。
3. 第三方服务：Supabase、Apple 系统服务（AlarmKit/通知/StoreKit 等）。

五、支付与内购相关
本应用支持订阅与买断能力。支付由 Apple 处理，开发者通常不会直接接触你的完整支付账户信息。开发者可能接收交易状态与订阅状态等必要信息用于履约与售后。

六、你的权利
在适用法律范围内，你可通过邮箱申请访问、更正、删除反馈数据或咨询个人信息处理问题。

七、未成年人
未成年人可使用本应用基础功能；如涉及反馈提交或个人信息输入，建议在监护人指导下进行。

八、联系我们
邮箱：landingfeather@163.com`,
    termsTitle: '使用条款',
    termsBody: `版本号：v1.0
生效日期：2026-02-24
更新日期：2026-02-24

欢迎使用「阳光呼吸（Sunny Breath）」。
本《使用条款》适用于你对本应用的安装、访问与使用。

一、服务内容
本应用提供闹钟、流程会话、音频播放、记录管理、反馈提交、会员与内购（订阅/买断）相关功能。

二、使用规则
你应合法、正当使用本应用，不得实施违法、侵权、干扰系统安全或绕过机制的行为。

三、内购条款
1. 商品可能包括自动续订订阅与一次性买断。
2. 商品名称、价格、币种、试用政策、地区税费以 App Store 实际展示为准。
3. 订阅可在 Apple 账户设置中管理自动续费；退款与争议处理按 Apple 政策执行。
4. 若你通过 iOS / iPadOS 平台下载或使用本应用，除本条款外，你对该平台版本应用的使用还应遵守 Apple 的《Licensed Application End User License Agreement（Standard EULA）》：
https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

四、知识产权
本应用及其代码、界面、文案、图形等受法律保护，未经许可不得擅自复制、传播或商业再分发。

五、责任限制
本应用按“现状”提供。闹钟与提醒能力受系统权限、设备状态、系统策略、网络状态等因素影响。本应用不构成医疗或生命安全承诺工具。

六、适用法律与争议解决
本条款适用中华人民共和国法律（不含冲突规范）。争议应先协商，协商不成可向开发者所在地有管辖权人民法院提起诉讼。

七、内置音乐授权与来源说明
本应用部分内置音频来自 Pixabay，并依据 Pixabay Terms of Service / Content License 使用：
https://pixabay.com/service/terms/

曲目与许可信息如下（下载时间均为 UTC）：
1. Peaceful
   URL: https://pixabay.com/music/corporate-peaceful-437953/
   Audio File ID: 437953
   Licensor: https://pixabay.com/users/nastelbom-48128234/
   Date of download: 2026-03-01 09:28:40 UTC
2. Meditation
   URL: https://pixabay.com/music/meditationspiritual-meditation-463389/
   Audio File ID: 463389
   Licensor: https://pixabay.com/users/nastelbom-48128234/
   Date of download: 2026-03-01 09:28:33 UTC
3. Gentle
   URL: https://pixabay.com/music/modern-classical-gentle-442633/
   Audio File ID: 442633
   Licensor: https://pixabay.com/users/nastelbom-48128234/
   Date of download: 2026-03-01 09:28:26 UTC
4. Calm Nature Music
   URL: https://pixabay.com/music/acoustic-group-calm-nature-music-471361/
   Audio File ID: 471361
   Licensor: https://pixabay.com/users/andriig-54059306/
   Date of download: 2026-03-01 09:27:39 UTC

上述作品版权归原作者及其权利人所有。若相关授权范围、可用性或平台政策发生变化，我们将按要求调整、替换或下线对应内容。

八、联系我们
邮箱：landingfeather@163.com`
  },
  en: {
    privacyTitle: 'Privacy Policy',
    privacyBody: `Version: v1.0
Effective Date: 2026-02-24
Updated: 2026-02-24

Welcome to Sunny Breath.
This Privacy Policy explains how we process personal information when you use the app.

1. Developer
Developer type: Individual developer (non-corporate)
Contact: landingfeather@163.com

2. Information We Process
- Local alarm and flow data: alarm time, title, repeat rules, selected music, wake actions, language preference, and records (stored primarily on your device).
- Feedback data: your feedback message and technical metadata (language, platform, OS version, timestamp, source).
- Permission status: notification and AlarmKit-related permission states required for reminder features.

3. Permissions
The app may request notification, AlarmKit-related access, local network (Bonjour), file access (only when you import audio), and background audio capability, solely for corresponding features.

4. Storage and Third Parties
- Local storage: SharedPreferences and app sandbox files.
- Cloud feedback storage: Supabase table public.feedback_entries.
- Third parties: Supabase and Apple system services (AlarmKit/Notifications/StoreKit).

5. Payments and Purchases
The app supports subscription and lifetime unlock product types. Payments are processed by Apple. The developer may receive necessary transaction/subscription status for entitlement fulfillment and support.

6. Your Rights
Subject to applicable law, you may request access, correction, or deletion of feedback data via email.

7. Minors
Minors may use core app features. For submitting feedback or entering personal information, guardian guidance is recommended.

8. Contact
landingfeather@163.com`,
    termsTitle: 'Terms of Use',
    termsBody: `Version: v1.0
Effective Date: 2026-02-24
Updated: 2026-02-24

Welcome to Sunny Breath.
These Terms of Use govern your installation, access, and use of the app.

1. Services
The app provides alarm, flow session, audio playback, record management, feedback submission, membership, and in-app purchase related features.

2. Acceptable Use
You must use the app lawfully and must not engage in infringement, abuse, unauthorized access, reverse engineering, or attempts to bypass security mechanisms.

3. In-App Purchase Terms
- Product types may include auto-renewable subscriptions and one-time lifetime unlock.
- Product names, pricing, currencies, trial rules, taxes, and regional availability are subject to App Store listing.
- Subscription management/cancellation is handled through Apple account settings.
- Refunds and billing disputes follow Apple policies.
- If you download or use this app on iOS / iPadOS, your use of that platform version is also subject to Apple’s Licensed Application End User License Agreement (Standard EULA):
https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

4. Intellectual Property
The app and related content are protected by applicable laws. No unauthorized copy, distribution, sale, rental, or commercial re-distribution is permitted.

5. Disclaimer and Liability
The app is provided “as is.” Alarm/reminder behavior may be affected by device status, permissions, system policies, and network conditions. The app is not a medical, emergency, or life-safety guaranteed tool.

6. Governing Law and Disputes
These terms are governed by the laws of the People’s Republic of China (excluding conflict rules). Disputes should first be resolved through consultation; otherwise, either party may file suit in a competent court at the developer’s location.

7. Built-in Audio Licensing and Sources
Some built-in audio tracks in this app are sourced from Pixabay and used under the Pixabay Terms of Service / Content License:
https://pixabay.com/service/terms/

Track and license details (download times in UTC):
1. Peaceful
   URL: https://pixabay.com/music/corporate-peaceful-437953/
   Audio File ID: 437953
   Licensor: https://pixabay.com/users/nastelbom-48128234/
   Date of download: 2026-03-01 09:28:40 UTC
2. Meditation
   URL: https://pixabay.com/music/meditationspiritual-meditation-463389/
   Audio File ID: 463389
   Licensor: https://pixabay.com/users/nastelbom-48128234/
   Date of download: 2026-03-01 09:28:33 UTC
3. Gentle
   URL: https://pixabay.com/music/modern-classical-gentle-442633/
   Audio File ID: 442633
   Licensor: https://pixabay.com/users/nastelbom-48128234/
   Date of download: 2026-03-01 09:28:26 UTC
4. Calm Nature Music
   URL: https://pixabay.com/music/acoustic-group-calm-nature-music-471361/
   Audio File ID: 471361
   Licensor: https://pixabay.com/users/andriig-54059306/
   Date of download: 2026-03-01 09:27:39 UTC

Copyright remains with the original creators and rights holders. If license scope, availability, or platform policy changes, we may update, replace, or remove related content as required.

8. Contact
landingfeather@163.com`
  }
};

const cravingCatDocs: Record<Locale, AppLegalDocumentSet> = {
  zh: {
    privacyTitle: '隐私协议',
    privacyBody: `版本号：v0.1
生效日期：2026-03-17
更新日期：2026-03-17

欢迎使用「成瘾猫（Craving Cat）」。
本页面为成瘾猫独立网页预留的隐私协议入口，当前内容用于说明首版产品中的主要数据处理方式；正式上架前可在此基础上继续更新。

一、我们处理的信息
1. Screen Time 授权状态：用于判断你是否已允许应用调用 iOS Family Controls / DeviceActivity / ManagedSettings 相关能力。
2. 受保护对象与规则：包括你选择的 App、分类、网页域名，以及对应的每日总量、单次上限、豁免时间等规则配置。
3. 最近一次触发与选择状态：例如阈值触发、豁免按钮、暂停按钮等状态，用于在应用内同步显示最近一次介入结果。

二、存储方式
当前版本以本地存储与 App Group 共享存储为主，用于在主应用与 iOS 扩展之间同步必要配置和状态。
截至本页面更新时，成瘾猫不依赖用户注册账号作为核心使用前提。

三、系统能力与第三方
成瘾猫使用 Apple 提供的 Screen Time 相关系统能力，包括但不限于 FamilyControls、DeviceActivity、ManagedSettings，以及 App Group 共享容器。
这些能力的实际可用性受 Apple 平台权限、系统版本、签名与设备环境影响。

四、你的控制权
你可以随时在系统设置或应用内关闭授权、修改受保护对象、调整规则，或停止原生守护。

五、后续更新
当正式网页 URL、反馈渠道、内购方案或云端能力接入后，本页面会补充更完整的隐私说明。`,
    termsTitle: '使用条款',
    termsBody: `版本号：v0.1
生效日期：2026-03-17
更新日期：2026-03-17

欢迎使用「成瘾猫（Craving Cat）」。
本页面为成瘾猫独立网页预留的使用条款入口，当前版本用于说明首版产品的基本服务边界。

一、服务内容
成瘾猫提供基于 iOS Screen Time 能力的温和冲动中断体验，包括受保护对象选择、规则设置、原生 Shield 介入、猫猫陪伴页与呼吸引导等功能。

二、使用说明
1. 本应用并非医疗、治疗或紧急干预工具。
2. 部分能力依赖 iPhone 真机、Apple 授权、Family Controls 能力与对应扩展正常签名。
3. 若系统权限、设备状态、Apple 平台策略或签名环境异常，相关功能可能无法完整生效。

三、规则与责任
你应合法、正当地使用本应用，不得利用本应用或其扩展从事绕过系统限制、干扰设备安全或侵犯第三方权益的行为。

四、内购与后续商业化
当前网页已为订阅 / 支持方案预留位置。若未来接入试用、订阅或买断，具体商品名称、价格、币种、试用政策与退款规则以 App Store 实际展示为准。
若你通过 iOS / iPadOS 平台下载或使用本应用，还应遵守 Apple 的《Licensed Application End User License Agreement（Standard EULA）》：
https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

五、页面性质
本页面当前已可作为独立 URL 使用，但仍属于首版预留法律页。正式上架或接入新能力前，开发者可能继续补充、修订和细化内容。`
  },
  en: {
    privacyTitle: 'Privacy Policy',
    privacyBody: `Version: v0.1
Effective Date: 2026-03-17
Updated: 2026-03-17

Welcome to Craving Cat.
This page is the reserved privacy entry for the standalone Craving Cat product page. The current text describes the main data-handling scope of the MVP and can be refined before release.

1. Information We Handle
- Screen Time authorization state, so the app can determine whether iOS Family Controls / DeviceActivity / ManagedSettings access has been granted.
- Protected targets and rules, including selected apps, categories, web domains, and rule values such as daily totals, single-session caps, and exemption windows.
- Recent trigger and choice states, such as threshold events or shield-button outcomes, so the app can reflect the latest intervention state.

2. Storage
The current MVP relies primarily on local storage and App Group shared storage so the main app and iOS extensions can sync necessary configuration and state.
As of this update, Craving Cat does not depend on user account registration as a core requirement.

3. System Capabilities and Third Parties
Craving Cat uses Apple-provided Screen Time related capabilities, including FamilyControls, DeviceActivity, ManagedSettings, and App Group shared containers.
Actual availability depends on Apple platform permissions, OS version, signing, and device environment.

4. Your Control
You can stop protection, modify protected targets, adjust rules, or revoke permissions through the app or system settings.

5. Future Updates
When the official product URL, feedback channel, purchases, or cloud features are finalized, this page will be expanded into a fuller privacy policy.`,
    termsTitle: 'Terms of Use',
    termsBody: `Version: v0.1
Effective Date: 2026-03-17
Updated: 2026-03-17

Welcome to Craving Cat.
This page is the reserved terms entry for the standalone Craving Cat product page. The current version outlines the MVP service boundary.

1. Services
Craving Cat provides a gentle Screen Time intervention experience built on iOS capabilities, including protected target selection, rule tuning, native shield interruption, cat companion moments, and breathing guidance.

2. Use Notes
- The app is not a medical, therapeutic, or emergency intervention tool.
- Some features require a physical iPhone, Apple authorization, Family Controls capability, and correctly signed extensions.
- If permissions, device state, Apple platform policy, or signing conditions are unavailable, parts of the experience may not function fully.

3. Acceptable Use
You must use the app lawfully and may not use the app or its extensions to bypass platform restrictions, interfere with device security, or infringe third-party rights.

4. Purchases and Future Commercialization
The product already reserves space for subscription and support plans. If trials, subscriptions, or lifetime unlock products are added later, names, prices, currencies, trial rules, and refund handling will follow the App Store listing.
If you download or use the app on iOS / iPadOS, your use is also subject to Apple’s Licensed Application End User License Agreement (Standard EULA):
https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

5. Page Status
This page already works as a standalone URL, but it is still a first-release legal placeholder. The text may be expanded or refined before public release or major feature updates.`
  }
};

const anchorNowDocs: Record<Locale, AppLegalDocumentSet> = {
  zh: {
    privacyTitle: '隐私协议',
    privacyBody: `版本号：v0.1
生效日期：2026-03-22
更新日期：2026-03-22

欢迎使用「此刻锚（Anchor Now）」。
本页面为独立产品页预留的隐私协议入口，当前内容说明首版产品的主要数据处理范围，后续可继续补充正式版本。

一、我们处理的信息
1. 场景与模板设置：包括你选择的状态模板、组件顺序、标题、提示语、计时分钟数与小组件短标签。
2. 本地流程数据：包括最近一次编辑、选中的场景和用于同步小组件的必要状态。
3. 反馈信息：如果你主动联系开发者，可能会处理你提交的反馈内容以及必要技术元数据。

二、存储方式
当前版本以本地设备存储与必要的应用共享容器为主，用于在主应用与 iOS 小组件之间同步模板和状态。
截至本页面更新时，此产品不以用户注册账号作为核心使用前提。

三、系统能力与第三方
此刻锚使用 Apple 平台提供的小组件与本地能力，实际可用性受系统版本、权限与设备环境影响。

四、你的控制权
你可以随时修改模板、重置内容，或停止继续使用本应用。

五、后续更新
当正式网页、反馈渠道、云端同步或商业化能力接入后，本页面会补充更完整的隐私说明。`,
    termsTitle: '使用条款',
    termsBody: `版本号：v0.1
生效日期：2026-03-22
更新日期：2026-03-22

欢迎使用「此刻锚（Anchor Now）」。
本页面为独立产品页预留的使用条款入口，当前版本用于说明首版产品的基本边界。

一、服务内容
此刻锚提供围绕恐慌、焦躁、走神三种场景的低负担介入体验，包括场景选择、组件画布编辑、模板切换与 iOS 小组件深链接等功能。

二、使用说明
1. 本应用并非医疗、治疗或紧急干预工具。
2. 部分能力依赖 iOS 设备、小组件权限与系统支持能力。
3. 若系统权限、设备状态或平台策略异常，相关功能可能无法完整生效。

三、使用规则
你应合法、正当地使用本应用，不得利用本应用从事绕过系统限制、干扰设备安全或侵犯第三方权益的行为。

四、页面性质
本页面当前已可作为独立 URL 使用，但仍属于首版预留法律页。正式上架或接入新能力前，开发者可能继续补充、修订和细化内容。`
  },
  en: {
    privacyTitle: 'Privacy Policy',
    privacyBody: `Version: v0.1
Effective Date: 2026-03-22
Updated: 2026-03-22

Welcome to Anchor Now.
This page is the reserved privacy entry for the standalone product page. The current text describes the main data-handling scope of the first release and can be refined later.

1. Information We Handle
- Scene and template settings, including the selected state, component order, titles, prompts, timer duration, and widget short labels.
- Local flow data, including the latest edits, the selected scene, and the state required to sync widget content.
- Feedback data, if you contact the developer directly, along with the necessary technical metadata that comes with it.

2. Storage
The current version relies primarily on local device storage and the necessary app shared container so the main app and iOS widget can sync templates and state.
As of this update, the product does not require user account registration as a core prerequisite.

3. System Capabilities and Third Parties
Anchor Now uses Apple platform widget and local capabilities. Actual availability depends on OS version, permissions, and device conditions.

4. Your Control
You can edit templates, reset content, or stop using the app at any time.

5. Future Updates
When the official website, feedback channel, cloud sync, or commercial features are introduced, this page will be expanded into a fuller privacy policy.`,
    termsTitle: 'Terms of Use',
    termsBody: `Version: v0.1
Effective Date: 2026-03-22
Updated: 2026-03-22

Welcome to Anchor Now.
This page is the reserved terms entry for the standalone product page. The current version outlines the first-release service boundary.

1. Services
Anchor Now provides a low-load intervention experience for panic, anxiety, and drift, including scene selection, component-canvas editing, template switching, and iOS widget deep links.

2. Use Notes
- The app is not a medical, therapeutic, or emergency intervention tool.
- Some capabilities depend on iOS devices, widget permissions, and system support.
- If permissions, device state, or platform policy are unavailable, parts of the experience may not function fully.

3. Acceptable Use
You must use the app lawfully and may not use it to bypass platform restrictions, interfere with device security, or infringe third-party rights.

4. Page Status
This page already works as a standalone URL, but it is still a first-release legal placeholder. The text may be expanded or refined before public release or major feature updates.`
  }
};

const legalApps: LegalAppDefinition[] = [
  {
    id: 'anchor-now',
    slug: 'anchor-now',
    names: {
      zh: '此刻锚 / Anchor Now',
      en: 'Anchor Now / 此刻锚'
    },
    documents: anchorNowDocs
  },
  {
    id: 'craving-cat',
    slug: 'craving-cat',
    names: {
      zh: '成瘾猫 / Craving Cat',
      en: 'Craving Cat / 成瘾猫'
    },
    documents: cravingCatDocs
  },
  {
    id: 'sunshine-breath',
    slug: 'sunny-breath',
    names: {
      zh: '阳光呼吸 / Sunny Breath',
      en: 'Sunny Breath / 阳光呼吸'
    },
    documents: sunnyBreathDocs
  }
];

function legalPath(locale: Locale, appSlug: string, docType: LegalDocType): string {
  if (locale === 'zh') return `/apps/${appSlug}/${docType}`;
  return `/en/apps/${appSlug}/${docType}`;
}

export function getAppLegalLinks(locale: Locale, appId: string): AppLegalLinks | null {
  const app = legalApps.find((item) => item.id === appId);
  if (!app) return null;

  const docSet = app.documents[locale];
  return {
    privacyLabel: docSet.privacyTitle,
    termsLabel: docSet.termsTitle,
    privacyPath: legalPath(locale, app.slug, 'privacy'),
    termsPath: legalPath(locale, app.slug, 'terms')
  };
}

export function getLegalStaticPaths(locale: Locale) {
  return legalApps.flatMap((app) => {
    const docSet = app.documents[locale];

    const pages: AppLegalPageData[] = [
      {
        appId: app.id,
        appSlug: app.slug,
        appName: app.names[locale],
        docType: 'privacy',
        title: docSet.privacyTitle,
        body: docSet.privacyBody
      },
      {
        appId: app.id,
        appSlug: app.slug,
        appName: app.names[locale],
        docType: 'terms',
        title: docSet.termsTitle,
        body: docSet.termsBody
      }
    ];

    return pages.map((page) => ({
      params: { app: app.slug, doc: page.docType },
      props: { page }
    }));
  });
}
