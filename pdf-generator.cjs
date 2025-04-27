const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF(htmlPath, pdfPath) {
  console.log(`Convertendo ${htmlPath} para ${pdfPath}...`);
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Ler o arquivo HTML
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Carregar o conteúdo HTML na página
  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });
  
  // Gerar o PDF
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });
  
  await browser.close();
  console.log(`PDF gerado com sucesso: ${pdfPath}`);
}

async function main() {
  try {
    // Criar diretórios se não existirem
    if (!fs.existsSync(path.join(__dirname, 'public/bulletins'))) {
      fs.mkdirSync(path.join(__dirname, 'public/bulletins'), { recursive: true });
    }
    
    if (!fs.existsSync(path.join(__dirname, 'public/documents'))) {
      fs.mkdirSync(path.join(__dirname, 'public/documents'), { recursive: true });
    }
    
    // Gerar PDFs
    await generatePDF(
      path.join(__dirname, 'public/bulletins/boletim-01.html'),
      path.join(__dirname, 'public/bulletins/boletim-01.pdf')
    );
    
    await generatePDF(
      path.join(__dirname, 'public/documents/manual-participante.html'),
      path.join(__dirname, 'public/documents/manual-participante.pdf')
    );
    
    console.log('Todos os PDFs foram gerados com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar PDFs:', error);
  }
}

main(); 