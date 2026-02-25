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

四、知识产权
本应用及其代码、界面、文案、图形等受法律保护，未经许可不得擅自复制、传播或商业再分发。

五、责任限制
本应用按“现状”提供。闹钟与提醒能力受系统权限、设备状态、系统策略、网络状态等因素影响。本应用不构成医疗或生命安全承诺工具。

六、适用法律与争议解决
本条款适用中华人民共和国法律（不含冲突规范）。争议应先协商，协商不成可向开发者所在地有管辖权人民法院提起诉讼。

七、联系我们
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

4. Intellectual Property
The app and related content are protected by applicable laws. No unauthorized copy, distribution, sale, rental, or commercial re-distribution is permitted.

5. Disclaimer and Liability
The app is provided “as is.” Alarm/reminder behavior may be affected by device status, permissions, system policies, and network conditions. The app is not a medical, emergency, or life-safety guaranteed tool.

6. Governing Law and Disputes
These terms are governed by the laws of the People’s Republic of China (excluding conflict rules). Disputes should first be resolved through consultation; otherwise, either party may file suit in a competent court at the developer’s location.

7. Contact
landingfeather@163.com`
  }
};

const legalApps: LegalAppDefinition[] = [
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
