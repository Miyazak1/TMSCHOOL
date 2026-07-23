# OSSD 学校纯前端静态官网方案

## 目标定位

新网站不做后端、不使用 WordPress，定位为一个高可信度、易维护、加载快的 OSSD 学校官网。它参考 ASIM School 的有效设计优点：首屏快速说明学校属性、突出 OSSD/在线课程、保留清晰联系入口、展示课程覆盖面、保留国际学生入口和 FAQ；但不做风格复刻，也不继承 WordPress 的复杂结构。

本项目核心是：用首页明确 OSSD 学校身份并建立信任，用课程目录承接 Grade 9-12 选课需求，用 Admissions 页面完成招生咨询转化，用 Contact 页面收口咨询。

## 技术路线

- 纯静态 HTML + CSS + JavaScript
- 无后端
- 无数据库
- 无 WordPress
- 联系方式使用电话和邮箱直达
- 课程数据维护在 `script.js`
- 可部署到 Nginx、OSS 静态托管、Cloudflare Pages、Netlify、Vercel、GitHub Pages 等环境

## 参考站优点继承

- 顶部联系信息条：电话、邮箱、地址直接可见
- 简洁主导航：Courses / Admissions / International Students / About / Contact
- 大图 Hero：首屏直接表达 OSSD online credit school 定位
- 蓝色信任感视觉：教育、认证、学术感更强
- 首页 About 区块：说明学校是谁、提供什么价值
- 课程展示：课程代码、年级、学科、pathway、先修要求清晰可扫
- Learning Options：展示 live online、asynchronous、tutoring、independent study 等服务能力
- 中段 CTA：在用户阅读过程中再次引导咨询
- FAQ：回答 OSSD credits、年级、国际学生、课程形式、选课、学费咨询等问题
- 国际学生独立页面：明确服务国际学生，但不承诺签证结果
- 联系页：电话、邮箱、地址、准备材料清单，不放后端表单

## 页面结构

第一版包含 6 个主要页面：

- `index.html`：首页，建立信任并引导咨询
- `courses.html`：课程目录，支持前端筛选
- `admissions.html`：申请流程
- `international-students.html`：国际学生信息
- `about.html`：学校定位和学习方式
- `contact.html`：联系招生，无后端表单

## 内容原则

文案围绕以下关键词组织：

- Ontario online high school credits
- OSSD credits online
- Grade 9-12 online courses
- International students OSSD
- Ontario curriculum
- Course planning
- Teacher support

内容应专业、清晰、招生导向，避免空泛口号。涉及签证、学习许可、移民结果时只做谨慎提醒，不做结果承诺。

## 设计原则

- 标题使用更有辨识度的衬线字体，正文使用现代无衬线字体
- 主色为深蓝和浅灰蓝，橙色用于 CTA
- 卡片圆角控制在 8px 左右，保持专业感
- 首页不做营销空壳，第一屏直接呈现学校和 OSSD 课程价值
- 移动端保留底部快捷联系栏，提高咨询转化
- 不堆叠超长课程列表，用筛选和卡片提高浏览效率

## 部署建议

该项目是静态站，最低只需要能提供静态文件访问的服务器或托管平台。

如果使用宝塔 + Nginx：

- 只安装宝塔面板和 Nginx
- 不需要 PHP
- 不需要 MySQL
- 不需要 Node.js
- 不需要 Redis
- 网站根目录放 HTML/CSS/JS 文件
- 首页设置为 `index.html`
- 开启 HTTPS 证书

如果使用对象存储或静态托管：

- 上传所有静态文件
- 设置 `index.html` 为默认首页
- 绑定 `tmpsprivatehighschool.com`
- 开启 HTTPS
