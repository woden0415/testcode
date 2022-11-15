
/**
 * 1. 统一收集所有的日志信息
 * 2. 环境区分
 *  2.1 开发环境（本地启动） 默认展示
 *  2.2 测试环境（发布到线上测试） 不展示日志，将日志信息发布到远程服务
 *  2.3 生产环境（发布到线上生产） 不展示日志，将日志信息发布到远程服务
 * 3. 配置收集的日志等级（优先级上error>warn>log）
 *  3.1 log 收集 error，warn，log
 *  3.2 warn 收集 warn，log
 *  3.3 error 收集 error
 * 4. 参考 
 *  https://meticulous.ai/blog/getting-started-with-react-logging/
 *  https://stackoverflow.nilmap.com/question?dest_url=https://stackoverflow.com/questions/45395369/how-to-get-console-log-line-numbers-shown-in-nodejs
 */

type LogFn =
  (message?: any, ...optionalParams: any[]) => void;

interface ILogger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

type LogLevel = 'log' | 'warn' | 'error';

const NO_OP: LogFn = (message?: any, ...optionalParams: any[]) => { };
class ConsoleLogger implements ILogger {
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;

  constructor(options?: { level?: LogLevel }) {
    const { level } = options || {};

    this.error = console.error.bind(console);

    if (level === 'error') {
      this.warn = NO_OP;
      this.log = NO_OP;
      return;
    }

    this.warn = console.warn.bind(console);

    if (level === 'warn') {
      this.log = NO_OP;
      return;
    }

    this.log = console.log.bind(console);
  }



}

const logger = new ConsoleLogger({ level: 'log' })

// logger.log('log')
// logger.warn('warn')
// logger.error('error')