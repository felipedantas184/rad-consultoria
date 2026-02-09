// app/api/contact/route.js - VERSÃO CORRIGIDA
import { transporter } from "../../../config/nodemailer";

const email = process.env.EMAIL;

// Campos do formulário RAD
const CONTACT_MESSAGE_FIELDS = {
  name: "Nome",
  phone: "WhatsApp",
  email: "E-mail",
  projectType: "Tipo de Projeto",
  location: "Local do Projeto",
  urgency: "Urgência",
  message: "Mensagem",
  timestamp: "Data/Hora",
  source: "Origem"
};

// Template HTML para email do lead
const generateLeadEmailContent = (data) => {
  const projectTypes = {
    'aerodromo': 'Aeródromo / Pista',
    'heliponto': 'Heliponto',
    'papi': 'Sistema PAPI',
    'sinalizacao': 'Sinalização Horizontal'
  };

  const urgencyTypes = {
    'imediato': 'Imediato (30-60 dias)',
    'planejamento': 'Planejamento (60-90 dias)',
    'futuro': 'Futuro (+90 dias)'
  };

  return {
    text: `
NOVA CONSULTA - RAD CONSULTORIA AERONÁUTICA

Nome: ${data.name}
WhatsApp: ${data.phone}
E-mail: ${data.email}
Tipo de Projeto: ${projectTypes[data.projectType] || data.projectType}
Local: ${data.location}
Urgência: ${urgencyTypes[data.urgency] || data.urgency || 'Não informada'}
Mensagem: ${data.message || 'Sem mensagem adicional'}

Data/Hora: ${new Date().toLocaleString('pt-BR')}
Origem: ${data.source || 'Landing Page'}
    `,

    html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            color: white;
            padding: 30px;
            border-radius: 12px 12px 0 0;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .header p {
            margin: 8px 0 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            background: #f8fafc;
            padding: 30px;
            border-radius: 0 0 12px 12px;
            border: 1px solid #e2e8f0;
        }
        .lead-card {
            background: white;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .field {
            margin-bottom: 16px;
        }
        .field-label {
            font-weight: 600;
            color: #64748b;
            font-size: 14px;
            margin-bottom: 4px;
        }
        .field-value {
            color: #1e293b;
            font-size: 16px;
            padding: 8px 12px;
            background: #f1f5f9;
            border-radius: 6px;
            border-left: 4px solid #3b82f6;
        }
        .highlight {
            background: linear-gradient(135deg, #dbeafe 0%, #dbeafe 100%);
            border-left-color: #1d4ed8;
            font-weight: 600;
        }
        .footer {
            text-align: center;
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 14px;
        }
        .badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 16px;
        }
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            .content {
                padding: 20px;
            }
            .lead-card {
                padding: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📋 Nova Consulta RAD</h1>
        <p>Potencial cliente solicitou consultoria gratuita</p>
    </div>
    
    <div class="content">
        <div class="badge">NOVO LEAD - ALTA PRIORIDADE</div>
        
        <div class="lead-card">
            <div class="field">
                <div class="field-label">Nome do Cliente</div>
                <div class="field-value highlight">${data.name}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Contato</div>
                <div class="field-value">
                    📱 ${data.phone}<br>
                    ✉️ ${data.email}
                </div>
            </div>
            
            <div class="field">
                <div class="field-label">Detalhes do Projeto</div>
                <div class="field-value">
                    <strong>Tipo:</strong> ${projectTypes[data.projectType] || data.projectType}<br>
                    <strong>Local:</strong> ${data.location}<br>
                    <strong>Urgência:</strong> ${urgencyTypes[data.urgency] || data.urgency || 'Não informada'}<br>
                </div>
            </div>
            
            ${data.message ? `
            <div class="field">
                <div class="field-label">Mensagem do Cliente</div>
                <div class="field-value">${data.message}</div>
            </div>
            ` : ''}
            
            <div class="field">
                <div class="field-label">Informações Técnicas</div>
                <div class="field-value">
                    📅 ${new Date().toLocaleString('pt-BR')}<br>
                    📍 ${data.source || 'Landing Page RAD'}
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} RAD Consultoria Aeronáutica<br>
            Este lead foi captado através do formulário de contato do site.</p>
        </div>
    </div>
</body>
</html>
    `
  };
};

// Template HTML para email de confirmação ao lead
const generateConfirmationEmailContent = (data) => {
  return {
    text: `
CONFIRMAÇÃO DE CONSULTA - RAD CONSULTORIA AERONÁUTICA

Olá ${data.name},

Agradecemos seu interesse nos serviços da RAD Consultoria Aeronáutica!

✅ Sua consulta gratuita foi agendada com sucesso.

DETALHES DA SUA SOLICITAÇÃO:
Tipo de Projeto: ${data.projectType}
Local: ${data.location}

📞 NOSSO CONTATO:
Ricardo
WhatsApp: (86) 99981-1672
E-mail: rad.aeronautica@gmail.com

⏰ PRÓXIMOS PASSOS:
1. Nossa equipe analisará sua solicitação
2. Entraremos em contato em até 24h
3. Agendaremos uma reunião para diagnóstico completo

Atenciosamente,
Equipe RAD Consultoria Aeronáutica
    `,

    html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            color: white;
            padding: 40px 30px;
            border-radius: 12px 12px 0 0;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 12px 0 0;
            opacity: 0.95;
            font-size: 18px;
        }
        .content {
            background: white;
            padding: 40px 30px;
            border-radius: 0 0 12px 12px;
            border: 1px solid #e2e8f0;
        }
        .confirmation-icon {
            text-align: center;
            margin-bottom: 30px;
        }
        .confirmation-icon div {
            width: 80px;
            height: 80px;
            background: #10b981;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            color: white;
        }
        .details-card {
            background: #f8fafc;
            border-radius: 10px;
            padding: 25px;
            margin: 30px 0;
            border-left: 5px solid #3b82f6;
        }
        .contact-info {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border-radius: 10px;
            padding: 25px;
            margin: 30px 0;
            border: 2px solid #93c5fd;
        }
        .steps {
            margin: 30px 0;
        }
        .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        .step-number {
            background: #3b82f6;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            flex-shrink: 0;
        }
        .step-content h4 {
            margin: 0 0 5px 0;
            color: #1e293b;
        }
        .step-content p {
            margin: 0;
            color: #64748b;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 14px;
        }
        .highlight {
            color: #1e40af;
            font-weight: 600;
        }
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            .header {
                padding: 30px 20px;
            }
            .content {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>✅ Consulta Agendada!</h1>
        <p>RAD Consultoria Aeronáutica</p>
    </div>
    
    <div class="content">
        <div class="confirmation-icon">
            <div>✓</div>
        </div>
        
        <h2 style="text-align: center; color: #1e293b; margin-bottom: 20px;">
            Olá, <span class="highlight">${data.name}</span>!
        </h2>
        
        <p style="text-align: center; color: #475569; font-size: 18px; margin-bottom: 30px;">
            Agradecemos seu interesse em nossos serviços. Sua consulta gratuita foi registrada com sucesso!
        </p>
        
        <div class="details-card">
            <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 20px;">📋 Detalhes da sua solicitação:</h3>
            <p><strong>Tipo de Projeto:</strong> ${data.projectType}</p>
            <p><strong>Local:</strong> ${data.location}</p>
            <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        </div>
        
        <div class="contact-info">
            <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 20px;">📞 Nossos Contatos:</h3>
            <p><strong>Ricardo</strong></p>
            <p>📱 WhatsApp: <strong>(86) 99981-1672</strong></p>
            <p>✉️ E-mail: <strong>rad.aeronautica@gmail.com</strong></p>
        </div>
        
        <div class="steps">
            <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 25px;">⏰ Próximos Passos:</h3>
            
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h4>Análise Inicial</h4>
                    <p>Nossa equipe analisará sua solicitação e documentos.</p>
                </div>
            </div>
            
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h4>Contato em até 24h</h4>
                    <p>Entraremos em contato para alinhar detalhes e agendar reunião.</p>
                </div>
            </div>
            
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h4>Diagnóstico Completo</h4>
                    <p>Realizaremos análise detalhada e apresentaremos proposta.</p>
                </div>
            </div>
        </div>
        
        <p style="text-align: center; color: #475569; font-size: 16px; margin-top: 40px;">
            <strong>Importante:</strong> Verifique sua caixa de spam caso não receba nossas mensagens.
        </p>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} RAD Consultoria Aeronáutica<br>
            Especialistas em homologação de aeródromos e helipontos ANAC</p>
            <p style="margin-top: 10px; font-size: 13px;">
                Este é um e-mail automático, por favor não responda.<br>
                Para dúvidas, utilize os contatos acima.
            </p>
        </div>
    </div>
</body>
</html>
    `
  };
};

// FUNÇÃO PRINCIPAL POST - Next.js App Router
export async function POST(request) {
  console.log('📨 API POST chamada');
  
  try {
    const data = await request.json();
    console.log('📝 Dados recebidos:', data);
    
    // Validação básica
    if (!data || !data.name || !data.phone || !data.email || !data.projectType || !data.location) {
      return Response.json({ 
        success: false, 
        message: "Por favor, preencha todos os campos obrigatórios." 
      }, { status: 400 });
    }

    // Adiciona timestamp e source
    const emailData = {
      ...data,
      timestamp: new Date().toLocaleString('pt-BR'),
      source: 'Landing Page - Formulário Principal'
    };

    console.log('📧 Preparando para enviar emails...');
    
    try {
      // 1. Email para você (admin)
      console.log('📤 Enviando email para admin...');
      await transporter.sendMail({
        from: `"RAD Consultoria" <${email}>`,
        to: email,
        replyTo: data.email,
        subject: `🚀 NOVA CONSULTA: ${data.name} - ${data.projectType}`,
        ...generateLeadEmailContent(emailData)
      });
      console.log('✅ Email para admin enviado');

      // 2. Email de confirmação para o lead
      console.log('📤 Enviando email de confirmação...');
      await transporter.sendMail({
        from: `"Ricardo - RAD Consultoria" <${email}>`,
        to: data.email,
        subject: '✅ Consulta Agendada - RAD Consultoria Aeronáutica',
        ...generateConfirmationEmailContent(emailData)
      });
      console.log('✅ Email de confirmação enviado');
      
    } catch (emailError) {
      console.error('⚠️ Erro no envio de email:', emailError);
      // Continua mesmo com erro de email, mas avisa
      return Response.json({ 
        success: true, // Ainda consideramos sucesso para o usuário
        message: "Sua consulta foi registrada! (Nota: Houve um problema com o email automático, mas entraremos em contato em breve.)"
      });
    }

    return Response.json({ 
      success: true,
      message: "Consulta enviada com sucesso! Verifique seu e-mail." 
    });

  } catch (err) {
    console.error("❌ Erro geral na API:", err);
    return Response.json({ 
      success: false, 
      message: "Erro interno do servidor. Tente novamente ou entre em contato diretamente." 
    }, { status: 500 });
  }
}

// Método GET para teste
export async function GET() {
  console.log('📨 API GET chamada');
  return Response.json({ 
    message: "API de contato da RAD Consultoria Aeronáutica",
    status: "online",
    timestamp: new Date().toISOString(),
    instructions: "Use POST para enviar dados do formulário"
  });
}

// Método OPTIONS para CORS (opcional)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}