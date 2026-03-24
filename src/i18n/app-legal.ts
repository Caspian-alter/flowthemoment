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
    privacyBody: `版本号：v1.0
生效日期：2026-03-24
更新日期：2026-03-24

欢迎使用「成瘾猫（Craving Cat）」。
本《隐私政策》依据当前代码实现撰写，用于说明你在使用本应用时，哪些信息只在设备本地处理，哪些信息会在你主动操作时通过网络发送。

一、开发者与适用范围
开发者主体：个人开发者（非公司主体）
联系邮箱：landingfeather@163.com
本政策适用于成瘾猫 iOS / iPadOS 应用及其配套的 Screen Time 扩展，以及本应用对应的独立法律页面。

二、我们默认不做的事情
1. 不提供账号注册、登录或用户画像。
2. 不接入广告 SDK、统计分析 SDK 或 App Tracking Transparency 跟踪。
3. 不上传你的 Screen Time 授权状态、受保护 App 列表、使用时长、触发记录、豁免记录或规则配置。
4. 不读取你在其他 App 中的内容、聊天记录、搜索内容、键盘输入、照片、通讯录、位置、麦克风或相机数据。

三、本地处理的信息
1. Screen Time 授权与保护状态
为实现 iOS 下的温和中断功能，本应用会在你主动授权后读取并在本地保存必要状态，包括：
- Screen Time / Family Controls 授权状态；
- 是否已开启保护；
- 最近一次阈值触发时间与事件名称；
- 最近一次 Shield 按钮结果（例如“这次先放下”“再给一点时间”）。

2. 受保护对象与规则配置
你在 iOS 系统选择器中选择的受保护对象及规则，仅用于本地功能实现与扩展同步，可能包括：
- 你选择的应用，以及系统选择器返回的相关标识；
- 当系统可提供时，对应应用的显示名称和 bundle identifier；
- 每日上限、单次上限、临时豁免时长等规则；
- 临时豁免状态。
当前代码主要围绕“应用级保护”工作；如果你在系统选择器中一并选择分类或网页域名，这些选择也可能被本地保存以保持你的配置连续性，但当前版本并不以分类或网页域名拦截为主要功能。

3. 本地界面与试用状态
本应用还会在设备本地保存少量必要状态，例如：
- 显示语言；
- 首页引导是否已阅读；
- 7 天试用的开始时间和结束时间。
其中试用时间会保存在本地偏好与安全存储（Keychain / Secure Storage）中，用于避免意外丢失。

4. 意见反馈草稿与发送队列
如果你在应用内填写反馈但发送失败，反馈文本可能暂存于设备本地，等待你下次打开应用时再次尝试发送。应用还会在本地记录短时间内的发送尝试时间，用于节流，避免重复提交。

四、联网与第三方服务
1. 反馈意见
当前版本唯一确定的业务性网络请求，是你主动提交反馈意见时发送到开发者的反馈服务。根据当前代码，请求内容仅包含：
- 你主动输入的反馈文本；
- 应用标识“com.flowthemoment.cravingcat”。
我们不会在该请求中附带你的受保护 App 列表、Screen Time 使用时长、触发记录、规则设置或 Apple 账户信息。
如果发送失败，反馈可能先留在本地，待后续重试。

2. Apple 系统与 App Store
如果你使用试用、购买或恢复购买功能，相关购买流程、账单处理和交易验证由 Apple / App Store 处理。应用会在设备本地读取必要的交易状态，以判断你当前是否拥有试用、月度方案或买断权限。开发者不会直接获取你的 Apple ID、银行卡号或完整支付资料。

3. 字体加载说明
当前代码使用 google_fonts 包渲染应用字体。根据该包文档，在对应字体文件未随 App 资源一同打包时，字体文件可能通过网络下载并缓存到设备本地。我们不会把这类请求用于广告、画像或行为分析；但从严格代码审查角度看，这意味着“反馈发送”之外，当前构建仍可能发生字体文件请求。若后续改为完全本地打包字体，本政策会相应更新。

4. 第三方服务清单
- Apple：Screen Time / Family Controls / DeviceActivity / ManagedSettings / StoreKit / App Store
- Supabase：仅用于接收你主动发送的反馈文本
- Google Fonts 机制：仅在当前构建未本地打包字体时，可能用于拉取字体文件

五、iOS 家长控制 / Screen Time 权限说明
1. 本应用当前代码通过 AuthorizationCenter.shared.requestAuthorization(for: .individual) 请求个人设备授权，目的是在你自己的兼容设备上提供自我管理和温和中断功能。
2. 根据 Apple 的 Screen Time API 设计，这类能力具有隐私保护特性。我们不会将你选择的 App、访问的网站或使用时长上传到开发者服务器。
3. 本应用不是后台监控他人设备的服务，也不提供远程读取他人使用记录的能力。

六、数据保存期限与删除
1. 本地数据会保存在你的设备上，直到你主动修改、关闭保护、清除 App 数据或卸载应用。
2. 你主动发送给我们的反馈文本，会在开发者反馈系统中保留至实现产品改进、排查问题或处理你的意见所必需的期间。
3. 如果你希望删除已提交的反馈文本，可通过联系邮箱提出请求。由于开发者不持有你的账号体系，删除请求通常需要你提供足够信息以帮助定位该条反馈。

七、你的权利
在适用法律范围内，你可以：
- 关闭或撤回系统授权；
- 调整或删除本地保护配置；
- 停止使用本应用并删除本地数据；
- 通过邮箱咨询、访问或请求删除你主动提交的反馈信息。

八、未成年人
本应用设计目标是用户在自己的设备上进行自我管理。若未成年人使用本应用，建议在监护人指导下进行。请不要将本应用用于未经授权的他人设备管理或信息收集。

九、政策更新
如果后续版本新增账号体系、云同步、崩溃分析、广告、更多网络能力或新的支付方案，我们会在上线前更新本政策并在独立法律页面公布。`,
    termsTitle: '使用条款',
    termsBody: `版本号：v1.0
生效日期：2026-03-24
更新日期：2026-03-24

欢迎使用「成瘾猫（Craving Cat）」。
本《使用条款》适用于你对本应用的下载、安装、访问和使用。

一、服务内容
成瘾猫是一款面向自我管理场景的温和中断应用。基于当前代码实现，本应用可提供以下能力：
1. 在兼容的 iOS / iPadOS 设备上，请求并使用 Apple 的 Screen Time / Family Controls 相关能力；
2. 选择需要保护的应用，并设置每日上限、单次上限、临时豁免时长等本地规则；
3. 在达到阈值后显示原生 Shield 介入界面，并提供“这次先放下”“再给一点时间”等选择；
4. 提供猫猫陪伴与呼吸引导等辅助体验；
5. 提供意见反馈入口；
6. 提供 7 天试用、月度方案和买断方案相关的 App Store 购买流程（以实际上架配置为准）。

二、使用前提与平台条件
1. 核心保护功能依赖兼容的 iOS / iPadOS 真机、系统版本、Apple 权限授权、Family Controls 能力、App Group 共享容器以及对应扩展的正常签名。
2. 若系统权限未开启、设备状态异常、Apple 平台策略变化、签名或扩展不可用、系统 API 行为变化，相关功能可能无法正常显示、延迟生效或部分失效。
3. 你应自行确认设备环境、系统版本与 Apple 账户条件满足使用要求。

三、授权性质与使用边界
1. 本应用面向你在自己设备上的自我管理和自我干预使用。
2. 你仅可在你拥有、控制，或依法获得明确授权管理的设备上使用本应用。
3. 你不得将本应用用于未经授权的他人设备监控、他人使用习惯收集、规避法律义务、规避 Apple 平台限制、干扰设备安全，或侵犯第三方合法权益。
4. 你不得对本应用或其扩展实施违法复制、反向工程、恶意调用、破坏性测试、篡改购买流程或其他超出法律允许范围的行为。

四、反馈提交规则
1. 反馈功能仅用于你主动向开发者提交产品意见、问题描述或改进建议。
2. 请不要通过反馈功能提交敏感个人信息、支付信息、他人隐私、违法内容或你无权披露的保密信息。
3. 你理解并同意，开发者可在产品支持、问题排查和功能改进范围内使用你主动提交的反馈内容。

五、购买、试用与 Apple 条款
1. 当前代码包含 7 天试用、月度方案与买断方案的购买逻辑，但具体商品名称、价格、币种、税费、计费周期、是否自动续期、可用地区及试用规则，以 App Store 实际展示为准。
2. 购买、扣款、续费、取消、退款、恢复购买及相关账务处理由 Apple 负责，开发者不会直接处理你的 Apple 账户付款信息。
3. 若月度方案在你的 App Store 区域中属于自动续期产品，你应通过 Apple 账户设置管理续费与取消。
4. 若你通过 iOS / iPadOS 平台下载或使用本应用，除本条款外，你对该平台版本应用的使用还应遵守 Apple 的《Licensed Application End User License Agreement（Standard EULA）》：
https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

六、知识产权
本应用及其代码、界面、文字、图像、动画、音效、设计及其他相关内容，除依法属于第三方的部分外，均受适用法律保护。未经许可，你不得复制、传播、出售、出租、再许可或作商业化再分发。

七、免责声明
1. 本应用不是医疗、心理治疗、危机干预、紧急救援、生命安全或法定家长监护服务工具。
2. 本应用旨在提供温和支持，不保证你一定停止某个应用的使用，也不保证每一次阈值触发、Shield 介入、临时豁免或引导都一定成功、及时或符合你的主观期待。
3. 本应用按“现状”和“可用”状态提供。对于因系统权限、设备状态、Apple 平台政策、网络环境、第三方服务、字体加载机制、签名环境或其他超出开发者合理控制范围的原因导致的功能中断、延迟或失败，开发者不作额外保证。

八、责任限制
在适用法律允许的最大范围内，开发者不对因你使用或无法使用本应用而产生的间接损失、附带损失、特殊损失、惩罚性损失或结果性损失承担责任。本条不影响法律强制规定下不得排除或限制的责任。

九、适用法律与争议解决
本条款适用中华人民共和国法律（不含冲突规范）。因本应用或本条款产生的争议，双方应先友好协商；协商不成的，可向开发者所在地有管辖权的人民法院提起诉讼。

十、联系我们
邮箱：landingfeather@163.com`
  },
  en: {
    privacyTitle: 'Privacy Policy',
    privacyBody: `Version: v1.0
Effective Date: 2026-03-24
Updated: 2026-03-24

Welcome to Craving Cat.
This Privacy Policy is written against the current codebase. It explains what stays on your device, what is sent only when you choose to send it, and what we do not collect.

1. Developer and scope
Developer type: Individual developer (non-corporate)
Contact: landingfeather@163.com
This policy applies to the Craving Cat iOS / iPadOS app, its related Screen Time extensions, and the standalone legal pages for this product.

2. What we do not do by default
1. We do not require account registration or sign-in.
2. We do not integrate ads SDKs, analytics SDKs, or App Tracking Transparency-based tracking.
3. We do not upload your Screen Time authorization status, protected app list, app-usage duration, trigger history, exemption history, or local protection rules.
4. We do not read the content of other apps, messages, searches, keyboard input, photos, contacts, location, microphone, or camera data.

3. Information processed locally on your device
1. Screen Time authorization and protection state
After you actively grant permission, the app stores the minimum local state needed to run protection features, including:
- Screen Time / Family Controls authorization status;
- whether protection is enabled;
- the most recent threshold trigger time and event name;
- the most recent shield-button outcome, such as “Put it down for now” or “Allow a little more.”

2. Protected targets and rule settings
The protected targets and rules you choose in the iOS system picker are used only for on-device functionality and extension sync. They may include:
- the apps you select and the related system-provided tokens;
- when available from the system, the app display name and bundle identifier;
- daily limits, session limits, and exemption durations;
- temporary exemption state.
The current build is centered on app-level protection. If you also select categories or web domains in Apple’s picker, those choices may still be stored locally to preserve your setup, even though category- or web-domain-based blocking is not the main active path in the current build.

3. Local interface and trial state
The app also stores a small amount of local state, such as:
- display language;
- whether the home tutorial has been seen;
- the start and end timestamps of the 7-day intro trial.
Trial timestamps are kept in local preferences and secure storage / keychain to reduce accidental loss.

4. Feedback draft queue and send-attempt history
If you write feedback and sending fails, the draft may remain on your device until the app retries later. The app also stores short-term send-attempt timestamps locally for rate limiting and retry control.

4. Network use and third parties
1. Feedback submissions
Under the current code, the only confirmed feature-specific network request is when you choose to send feedback to the developer’s feedback service. The request contains only:
- the feedback text you chose to submit; and
- the app identifier "com.flowthemoment.cravingcat".
We do not attach your protected app list, Screen Time duration, trigger history, rule configuration, or Apple account details to that feedback request.
If sending fails, the feedback may stay on your device first and retry later.

2. Apple system services and App Store
If you use trial, purchase, or restore-purchase features, billing and transaction handling are performed by Apple / the App Store. The app reads only the local transaction state needed to determine whether trial, monthly access, or lifetime access is available to you. We do not directly receive your Apple ID, bank card number, or full payment credentials.

3. Font loading notice
The current code uses the google_fonts package for typography. According to that package’s documentation, if matching font files are not bundled into the app, font files may be fetched over the network and cached on the device. We do not use this for advertising, profiling, or behavior analytics; however, from a strict code-review perspective, this means the current build may make font-file requests in addition to feedback sending. If the app later switches to fully bundled local fonts, this policy will be updated accordingly.

4. Third-party services currently involved
- Apple: Screen Time / Family Controls / DeviceActivity / ManagedSettings / StoreKit / App Store
- Supabase: only for receiving feedback text that you actively submit
- Google Fonts mechanism: only if the current build has not bundled the used font files locally

5. iOS parental-control / Screen Time permissions
1. The current code requests authorization with AuthorizationCenter.shared.requestAuthorization(for: .individual), which is designed for self-directed use on your own compatible device.
2. Apple describes the Screen Time APIs as privacy-preserving. We do not upload the apps you choose, the websites you visit, or the time you spend in those apps or websites to our servers.
3. Craving Cat is not a remote surveillance service and does not provide a way for us to read another person’s usage history from our server.

6. Retention and deletion
1. Local data stays on your device until you change settings, stop protection, clear app data, or uninstall the app.
2. Feedback you choose to send may remain in the developer’s feedback system for as long as reasonably needed to review product issues, improve the app, or process your request.
3. If you want already-submitted feedback deleted, contact us by email. Because we do not run a user-account system, we may need enough information from you to locate the relevant feedback entry.

7. Your choices and rights
Subject to applicable law, you may:
- revoke or stop system authorization;
- change or delete local protection settings;
- stop using the app and remove local data from your device;
- contact us to ask about, access, or request deletion of feedback you voluntarily submitted.

8. Minors
The app is designed for self-directed use on the user’s own device. If a minor uses the app, guardian guidance is recommended. Do not use the app to manage or collect data from another person’s device without proper authorization.

9. Policy updates
If a later version adds account systems, cloud sync, crash analytics, ads, broader network features, or new payment flows, we will update this policy before those features are made available.`,
    termsTitle: 'Terms of Use',
    termsBody: `Version: v1.0
Effective Date: 2026-03-24
Updated: 2026-03-24

Welcome to Craving Cat.
These Terms of Use govern your download, installation, access to, and use of the app.

1. Services
Craving Cat is a self-directed impulse-interruption app. Based on the current codebase, the app may provide:
1. Screen Time / Family Controls based protection on compatible iOS / iPadOS devices after you grant permission;
2. protected-app selection and local rule tuning for daily limits, session limits, and temporary exemptions;
3. native shield interruption with options such as “Put it down for now” and “Allow a little more”;
4. cat-companion and breathing-support interactions;
5. an in-app feedback form; and
6. a 7-day intro trial, monthly access flow, and lifetime-unlock flow through the App Store, subject to actual product configuration.

2. Platform conditions and prerequisites
1. Core protection features depend on a compatible physical iOS / iPadOS device, Apple authorization, Family Controls capability, App Group shared storage, available Screen Time APIs, and correctly signed app extensions.
2. If permissions are not granted, the device state changes, Apple platform rules change, extensions are not available, or the operating system behaves differently, parts of the experience may be delayed, limited, or fail to work.
3. You are responsible for maintaining the device, operating system, and account conditions needed for use.

3. License scope and acceptable use
1. The app is intended for self-management and self-directed use on a device you own, control, or are lawfully authorized to manage.
2. You may not use the app to monitor another person’s device without authorization, collect another person’s usage habits without permission, evade legal obligations, evade Apple platform restrictions, interfere with device security, or violate third-party rights.
3. You may not unlawfully copy, reverse engineer, tamper with, abuse, or attempt to manipulate the app, its extensions, or its purchase flow beyond what applicable law expressly permits.

4. Feedback submissions
1. The feedback feature is only for product suggestions, bug reports, and support-related comments that you choose to send.
2. Do not submit sensitive personal information, payment information, other people’s private data, unlawful material, or confidential information you are not authorized to disclose.
3. You agree that the developer may review and use feedback you voluntarily submit for support, debugging, and product improvement.

5. Trial, purchases, and Apple terms
1. The current codebase includes a 7-day intro trial, a monthly access flow, and a lifetime-unlock flow. However, product names, prices, taxes, currencies, billing cycles, renewal behavior, regional availability, and trial details are controlled by the App Store listing actually shown to you.
2. Billing, renewals, cancellations, refunds, restores, and related transaction handling are performed by Apple. The developer does not directly process your Apple account payment information.
3. If the monthly plan is configured in your App Store region as an auto-renewing product, you are responsible for managing renewal and cancellation through your Apple account settings.
4. If you download or use the app on iOS / iPadOS, your use is also subject to Apple’s Licensed Application End User License Agreement (Standard EULA):
https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

6. Intellectual property
Except for content or rights that legally belong to third parties, the app and its code, interface, text, imagery, animation, sound, and design are protected by applicable law. You may not copy, distribute, sell, rent, sublicense, or commercially redistribute them without permission.

7. Disclaimer
1. The app is not a medical, therapeutic, crisis-response, emergency, life-safety, or legally mandated parental-monitoring service.
2. The app is designed to provide gentle support. It does not guarantee that you will stop using another app, nor does it guarantee that every threshold event, shield intervention, temporary exemption, or guidance flow will appear on time or work exactly as you expect.
3. The app is provided on an “as is” and “as available” basis. We do not make additional warranties for interruptions, delays, or failures caused by system permissions, device state, Apple platform policy, network conditions, third-party services, font-loading mechanisms, signing conditions, or other factors outside the developer’s reasonable control.

8. Limitation of liability
To the maximum extent permitted by applicable law, the developer is not liable for indirect, incidental, special, punitive, or consequential damages arising from or related to your use of, or inability to use, the app. This clause does not limit liability that cannot be excluded under applicable law.

9. Governing law and disputes
These terms are governed by the laws of the People’s Republic of China, excluding conflict-of-law rules. Disputes should first be resolved through good-faith consultation. If consultation fails, either party may bring the dispute before a court of competent jurisdiction at the developer’s location.

10. Contact
landingfeather@163.com`
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
