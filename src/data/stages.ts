export interface Exercise {
  title: string;
  goal: string;
  prompt: string;
  tip?: string;
}

export interface Stage {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  level: number;
  description: string;
  concepts: string[];
  exercises: Exercise[];
  nextStage?: string;
  prevStage?: string;
}

export const stages: Stage[] = [
  {
    id: "basic-interaction",
    title: "基础交互",
    subtitle: "第一阶段",
    icon: "⌨️",
    level: 1,
    description:
      "从最基础的读写、搜索、shell 命令开始，熟悉 DeepSeek TUI 的核心交互模式。学会用自然语言操作文件系统、运行命令、搜索代码。",
    concepts: ["文件读取", "目录浏览", "代码搜索", "Shell 命令", "自然语言交互"],
    exercises: [
      {
        title: "探索工作区",
        goal: "让我看看我有哪些项目？",
        prompt: '直接问："列出我工作目录下的所有文件夹"',
        tip: "DeepSeek TUI 的工作目录就是你的终端当前目录，所有文件操作都围绕它展开。",
      },
      {
        title: "浏览项目结构",
        goal: "了解一个项目的文件组成",
        prompt: '"hermes-learning-path 项目里有什么文件？"',
        tip: "你可以指定任意路径，AI 会递归列出目录内容。",
      },
      {
        title: "读取文件内容",
        goal: "查看文件的具体内容",
        prompt: '"读一下 index.html 的内容"',
        tip: "支持纯文本、代码文件、甚至 PDF（自动提取文本）。",
      },
      {
        title: "搜索代码",
        goal: "找到所有包含特定关键字的文件",
        prompt: '"在 hermes-learning-path 目录下搜索 function"',
        tip: "使用 grep_files 进行正则搜索，支持文件类型过滤。",
      },
      {
        title: "运行 Shell 命令",
        goal: "执行系统命令并查看结果",
        prompt: '"查看当前 git 状态" 或 "查看 Go 版本"',
        tip: "AI 会自动选择合适的方式执行命令——短命令直接运行，长任务后台执行。",
      },
    ],
    nextStage: "structured-tasks",
  },
  {
    id: "structured-tasks",
    title: "结构化任务",
    subtitle: "第二阶段",
    icon: "📋",
    level: 2,
    description:
      "学习用 checklist 和 plan 工具管理多步骤工作。AI 会自动分解复杂任务、展示进度、逐步执行并验证结果。",
    concepts: ["任务分解", "Plan 规划", "Checklist 追踪", "验证门禁", "自动执行"],
    exercises: [
      {
        title: "创建 Go Hello World 项目",
        goal: "从零到编译运行一个完整的 Go 项目",
        prompt: '"创建一个 Go hello world 项目，包含 main.go 和 go.mod，然后编译运行"',
        tip: "AI 会自动分解为：创建目录 → 写 go.mod → 写 main.go → 编译 → 运行。你会在侧边栏看到实时进度。",
      },
      {
        title: "修改 HTML 文件",
        goal: "编辑现有文件的内容",
        prompt: '"把 hermes-learning-path/index.html 的标题改成中文"',
        tip: "AI 会先读取文件确认内容，再精确修改。所有写操作会请求你的批准。",
      },
      {
        title: "添加新元素",
        goal: "在文件中增加内容",
        prompt: '"在 index.html 里加一个 footer"',
        tip: "你可以指定位置（开头、结尾、某个标签后），AI 会找到正确位置插入。",
      },
      {
        title: "多步骤重构",
        goal: "一次处理多个相关文件",
        prompt: '"把 Go 项目的 main.go 拆分成多个文件，每个文件一个函数"',
        tip: "复杂任务会自动显示 Plan（高层策略）+ Checklist（具体步骤），你可以随时干预。",
      },
    ],
    prevStage: "basic-interaction",
    nextStage: "parallel",
  },
  {
    id: "parallel",
    title: "并行与分治",
    subtitle: "第三阶段",
    icon: "⚡",
    level: 3,
    description:
      "利用 sub-agent 并行处理多个独立任务。AI 会同时启动多个子智能体，各自完成独立工作，最后汇总结果。这是效率提升的关键。",
    concepts: ["Sub-agent", "并行执行", "分治策略", "结果汇总", "批量操作"],
    exercises: [
      {
        title: "并行读取多个文件",
        goal: "同时分析多个文件并对比",
        prompt: '"同时读取 index.html 和 README.md，对比它们的内容是否一致"',
        tip: "AI 会启动 2 个子智能体并行读取两个文件，然后汇总对比结果。比顺序读取快一倍。",
      },
      {
        title: "并行创建多个包",
        goal: "同时创建多个独立的 Go 包",
        prompt: '"在 Go 项目里新建两个独立的包，每个包一个文件，分别实现加法和乘法函数"',
        tip: "两个包完全独立 → 两个子智能体并行创建。AI 只负责规划和最终验证。",
      },
      {
        title: "批量代码审查",
        goal: "同时审查多个文件的代码质量",
        prompt: '"审查 Go 项目下所有 .go 文件的代码风格"',
        tip: "每个文件分配一个子智能体，并行审查，最后汇总报告。适合代码库规模较大的场景。",
      },
      {
        title: "并行信息收集",
        goal: "同时从多个来源收集信息",
        prompt: '"同时查看 Go 项目的 git log、当前分支、和未提交的变更"',
        tip: "3 个独立的 git 命令，3 个子智能体并行执行，结果在一次回复中全部呈现。",
      },
    ],
    prevStage: "structured-tasks",
    nextStage: "skills",
  },
  {
    id: "skills",
    title: "技能系统",
    subtitle: "第四阶段",
    icon: "🎯",
    level: 4,
    description:
      "创建自定义技能，让 AI 记住你的偏好和项目规范。技能被持久化到磁盘，随时可通过 $技能名 调用。这是个性化定制的核心能力。",
    concepts: ["技能创建", "持久化配置", "代码规范", "项目模板", "上下文注入"],
    exercises: [
      {
        title: "创建 Golang 审查技能",
        goal: "定义一个代码审查标准让 AI 记住",
        prompt: '"用 Skill Creator 帮我创建一个技能，专门用于 Golang 代码审查，包含：命名规范、错误处理、并发安全检查"',
        tip: '技能会保存到 ~/.deepseek/skills/，以后只需说 "$golang-review 审查这个文件" 即可触发。',
      },
      {
        title: "创建项目风格指南",
        goal: "为项目定义统一的代码风格",
        prompt: '"创建一个技能，定义我的项目代码风格：2 空格缩进、单引号、分号可选"',
        tip: "风格指南技能可以跨项目复用，AI 在编辑文件时会自动遵循。",
      },
      {
        title: "创建工作流模板",
        goal: "固化常用的多步骤操作流程",
        prompt: '"创建一个技能，定义 \'发布检查清单\'：运行测试 → 格式化代码 → 构建 → 生成 changelog"',
        tip: "技能可以包含执行逻辑，不只是文档。配合 task 系统可以自动执行。",
      },
      {
        title: "使用已有技能",
        goal: "体验一键调用技能",
        prompt: '创建完成后，尝试说 "$golang-review 审查 main.go"',
        tip: "技能名用 $ 前缀引用，AI 会自动加载技能上下文并根据规范执行。",
      },
    ],
    prevStage: "parallel",
    nextStage: "complex",
  },
  {
    id: "complex",
    title: "复杂工程",
    subtitle: "第五阶段",
    icon: "🏗️",
    level: 5,
    description:
      "处理大规模代码库、长文档、批量任务。掌握跨文件重构、大数据分析、递归任务分解等高级能力。这是通往 DeepSeek TUI 专家的最后一站。",
    concepts: [
      "大规模重构",
      "批量处理",
      "长文档分析",
      "递归分解",
      "验证策略",
    ],
    exercises: [
      {
        title: "跨文件重命名重构",
        goal: "在整个项目中安全地重命名符号",
        prompt: '"把 Go 项目里所有叫 oldName 的函数重命名为 newName，并更新所有调用处"',
        tip: "AI 会先搜索所有引用，确认范围，然后逐个文件修改。每个修改都会请求审批。",
      },
      {
        title: "大型配置文件分析",
        goal: "分析结构复杂的配置文件",
        prompt: '"分析 openclaw.json 的结构，提取所有顶层 key 并说明用途"',
        tip: "对于超大文件，AI 会使用 RLM 进行分块分析，避免上下文溢出。",
      },
      {
        title: "批量文档生成",
        goal: "为整个项目生成 API 文档",
        prompt: '"给 Go 项目下所有导出函数添加 godoc 注释"',
        tip: "AI 会将任务分解为：列出所有导出函数 → 分组 → 并行生成注释 → 逐文件应用。",
      },
      {
        title: "依赖分析",
        goal: "理解项目模块间的依赖关系",
        prompt: '"分析 Go 项目各包之间的 import 依赖，画出依赖图"',
        tip: "AI 会先构建依赖图，然后发现循环依赖、不必要的依赖等问题。",
      },
    ],
    prevStage: "skills",
  },
];

export function getStageById(id: string): Stage | undefined {
  return stages.find((s) => s.id === id);
}

export function getAdjacentStages(id: string) {
  const idx = stages.findIndex((s) => s.id === id);
  return {
    prev: idx > 0 ? stages[idx - 1] : undefined,
    next: idx < stages.length - 1 ? stages[idx + 1] : undefined,
  };
}
