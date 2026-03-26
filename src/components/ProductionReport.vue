<template>
  <div class="production-report">
    <div class="header">
      <h1>生产综合分析报告</h1>
      <div class="actions">
        <el-button type="primary" @click="exportImage" style="margin-right: 10px;">导出图片</el-button>
        <el-button type="success" @click="sendEmail">发送邮件</el-button>
      </div>
    </div>
    <div class="report-container">
      <iframe 
        ref="reportIframe"
        class="report-iframe"
        :srcdoc="htmlContent"
        frameborder="0"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      htmlContent: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style><![CDATA[
body {
    font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    margin: 20px;
}
h1 {
    font-size: 20px;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}
h2 {
    font-size: 18px;
    color: #34495e;
    border-bottom: 1px solid #bdc3c7;
    padding-bottom: 8px;
}
h3 { font-size: 16px; color: #7f8c8d; }
h4 { font-size: 14px; color: #95a5a6; }
table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 12px;
    table-layout: fixed;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.fixed-width {
    table-layout: fixed;
    width: 100%;
}
table, th, td {
    border: 1px solid #ddd;
}
th {
    background-color: #f8f9fa;
    font-weight: bold;
    text-align: center;
    padding: 6px;
    word-break: break-all;
    overflow: hidden;
}
td {
    padding: 6px;
    text-align: left;
    word-break: break-all;
    overflow: hidden;
    vertical-align: top;
}
tr:nth-child(even) {
    background-color: #f8f9fa;
}
.table-container {
    width: 100%;
    overflow-x: auto;
    margin: 15px 0;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}
.table-wrapper {
    min-width: 100%;
}
code {
    background-color: #f4f4f4;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
}
pre {
    background-color: #f8f8f8;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    border-left: 4px solid #3498db;
}
p {
    white-space: pre-wrap
}
blockquote {
    border-left: 4px solid #bdc3c7;
    padding-left: 15px;
    margin-left: 0;
    color: #7f8c8d;
    font-style: italic;
}
ul, ol {
    padding-left: 25px;
}
li {
    margin: 5px 0;
}
@media print {
    body { margin: 10px; }
    .table-container {
        overflow-x: visible;
        border: none;
    }
    table {
        font-size: 10px;
    }
    th, td {
        padding: 4px;
    }
}
]]></style>
  </head>
  <body>
    <h2>产能、效率达标统计</h2>
    <p>生产概况： 产能未达标！产能未达标主要由于GET工艺段（1线、2线）及PRE工艺段（1线）产出严重不足，导致整体产能未达成目标。其余指标中，A级率、B级率、效率可发货率未达标，碎片率、返工率、Eta低效率达标。</p>
    <p>产出达成情况：</p>
    <ul>
        <li>计划产出：207987</li>
        <li>实际产出：110444 <span style="color: red;font-weight:bold;">*</span></li>
        <li>A级产出：109555</li>
        <li>A级率：98.97% ， A级率目标：99.00% （比目标低了0.03%） <span style="color: red;font-weight:bold;">*</span></li>
        <li>碎片数：253</li>
        <li>碎片率：0.23% ， 碎片率目标：0.24% （达标）</li>
        <li>返工数：1829</li>
        <li>返工率：1.47% ， 返工率目标：1.50% （达标）</li>
        <li>Eta平均效率：27.31% ， Eta平均效率目标：27.10% （达标）</li>
        <li>B级产出：831</li>
        <li>B级率：0.75% ， B级率目标：0.49% （比目标高了0.26%） <span style="color: red;font-weight:bold;">*</span></li>
        <li>Eta低效数：58</li>
        <li>Eta低效率：0.05% ， Eta低效率目标：0.05% （达标）</li>
        <li>一次直通数：109671</li>
        <li>一次直通率：99.07% ， 一次直通率目标：90.00% （达标）</li>
        <li>效率可发货比例数：110408</li>
        <li>效率可发货率：99.74% ， 效率可发货率目标：99.93% （比目标低了0.19%） <span style="color: red;font-weight:bold;">*</span></li>
    </ul>
  </body>
</html>`
    }
  },
  mounted() {
    // 确保iframe内容加载完成
    this.$nextTick(() => {
      const iframe = this.$refs.reportIframe;
      if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
      }
    });
  },
  methods: {
    async exportImage() {
      try {
        const iframe = this.$refs.reportIframe;
        if (!iframe) {
          this.$message.error('获取iframe元素失败');
          return;
        }

        const iframeBody = iframe.contentWindow.document.body;
        
        // 使用html2canvas将iframe内容转换为canvas
        const canvas = await html2canvas(iframeBody, {
          scale: 2, // 提高清晰度
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        // 将canvas转换为图片并下载
        const imageData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageData;
        link.download = `生产报告_${new Date().getTime()}.png`;
        link.click();

        this.$message.success('图片导出成功');
      } catch (error) {
        console.error('导出图片失败:', error);
        this.$message.error('导出图片失败，请重试');
      }
    },
    sendEmail() {
      try {
        const iframe = this.$refs.reportIframe;
        if (!iframe) {
          this.$message.error('获取iframe元素失败');
          return;
        }

        const iframeBody = iframe.contentWindow.document.body;
        const textContent = iframeBody.innerText;
        
        // 邮件主题
        const subject = '生产综合分析报告';
        
        // 邮件内容
        const body = `生产报告详情：\n\n${textContent}\n\n发送时间：${new Date().toLocaleString()}`;
        
        // 使用mailto链接打开邮件客户端
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;

        this.$message.success('邮件客户端已打开，请填写收件人并发送');
      } catch (error) {
        console.error('发送邮件失败:', error);
        this.$message.error('发送邮件失败，请重试');
      }
    }
  }
}
</script>

<style scoped>
.production-report {
  padding: 20px;
  background: #ffffff;
  min-height: calc(100vh - 60px);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  gap: 10px;
}

.production-report h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.report-container {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.report-iframe {
  width: 100%;
  min-height: 600px;
  border: none;
}
</style>