const nodemailer = require("nodemailer");

//! password bmvteam123**
//! app password lnnnbzcoowvrsoim

const transport=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"bmvteam.tn@gmail.com",
        pass:"lnnnbzcoowvrsoim"
    }
})
module.exports.sendConfirmation=(email,activationCode)=>{
    transport.sendMail({
        from:"bmvteam.tn@gmail.com",
        to:email,
        subject: "Please confirm your email address",
        html:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>
          
            <style type="text/css">
              @media only screen and (min-width: 620px) {
          .u-row {
            width: 600px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
        
          .u-row .u-col-100 {
            width: 600px !important;
          }
        
        }
        
        @media (max-width: 620px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: 100% !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        p {
          margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
        
        table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-container-padding-padding { padding: 40px 10px 10px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 32% !important; } #u_content_image_1 .v-text-align { text-align: center !important; } #u_content_heading_1 .v-container-padding-padding { padding: 10px 10px 0px !important; } #u_content_heading_1 .v-font-size { font-size: 22px !important; } #u_content_heading_1 .v-line-height { line-height: 120% !important; } #u_content_text_5 .v-container-padding-padding { padding: 10px !important; } #u_content_text_4 .v-container-padding-padding { padding: 10px !important; } #u_content_button_1 .v-container-padding-padding { padding: 10px 10px 40px !important; } #u_content_button_1 .v-size-width { width: 65% !important; } #u_content_social_2 .v-container-padding-padding { padding: 40px 10px 10px !important; } #u_content_text_6 .v-container-padding-padding { padding: 10px 10px 20px !important; } }
            </style>
          
          
        
        <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
        
        </head>
        
        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
          <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
            
        
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #ebebeb;height: 100%;width: 100% !important;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
          
        <table id="u_content_image_1" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:9px;font-family:'Raleway',sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
              
              <img align="center" border="0" src="https://res.cloudinary.com/dkhknwrn5/image/upload/v1689860845/image-5_nus8mw.png" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 16%;max-width: 93.12px;" width="93.12" class="v-src-width v-src-max-width"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_heading_1" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 30px 0px;font-family:'Raleway',sans-serif;" align="left">
                
          <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #0066b3; line-height: 130%; text-align: center; word-wrap: break-word; font-size: 24px; font-weight: 400;"><strong><span style="white-space: pre-wrap; line-height: 26.4px;">Elevate Your Adventure With BMW : Unveiling our Exclusive Limited Edition Cars</span></strong></h1>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_text_5" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px;font-family:'Raleway',sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 16px; font-weight: 700; color: #e4bb87; line-height: 140%; text-align: center; word-wrap: break-word;">
            <p style="line-height: 140%;"><span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoiNm5LdjhiOW5sNndBRFV4ekxHVVUycyIsInBhc3RlSUQiOjE4MDYwMzgwMDcsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;" style="line-height: 22.4px;"></span><span data-buffer="&lt;!--(figma)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(/figma)--&gt;" style="line-height: 22.4px;"></span>Please proceed to verify your email by clicking the button down below</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:'Raleway',sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
              
              <img align="center" border="0" src="https://res.cloudinary.com/dkhknwrn5/image/upload/v1689860845/image-6_mp50a3.png" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 144px;" width="144" class="v-src-width v-src-max-width"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_text_4" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px;font-family:'Raleway',sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #0066b3; line-height: 140%; text-align: center; word-wrap: break-word;">
            
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_button_1" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 60px;font-family:'Raleway',sans-serif;" align="left">
                
          <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
        <div class="v-text-align" align="center">
          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="11%"  stroke="f" fillcolor="#3aaee0"><w:anchorlock/><center style="color:#ffffff;font-family:'Raleway',sans-serif;"><![endif]-->  
            <a href=http://localhost:3000/confirm/${activationCode}><button target="_blank" class="v-button v-size-width v-font-size" style="box-sizing: border-box; border: none; cursor: pointer; display: inline-block;font-family:'Raleway',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #ffffff; background-color: #0066B3; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:30%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
              <span class="v-line-height" style="display:block;padding:10px 20px;line-height:120%;"><strong><span style="line-height: 16.8px;">Click Here</span></strong></span>
            </button>
          </a>
          <!--[if mso]></center></v:roundrect><![endif]-->
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
        </div>
        
        
        
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f1f1f1;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style=" border-top: #000000 1px solid;  background-color: #ebebeb;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_social_2" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 10px;font-family:'Raleway',sans-serif;" align="left">
                
        <div align="center">
          <div style="display: table; max-width:167px;">
          <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:167px;"><tr><![endif]-->
          
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://www.facebook.com/BMW/" title="Facebook" target="_blank">
                  <img src="https://res.cloudinary.com/dkhknwrn5/image/upload/v1689860844/image-3_vdy4mk.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://twitter.com/BMW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter" target="_blank">
                  <img src="https://res.cloudinary.com/dkhknwrn5/image/upload/v1689860844/image-4_ihuoxl.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://www.linkedin.com/company/bmw-group/" title="LinkedIn" target="_blank">
                  <img src="https://res.cloudinary.com/dkhknwrn5/image/upload/v1689860844/image-2_gkhx10.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://www.instagram.com/bmw/?hl=en" title="Instagram" target="_blank">
                  <img src="https://res.cloudinary.com/dkhknwrn5/image/upload/v1689860844/image-1_cixc2z.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_text_6" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 100px 0px;font-family:'Raleway',sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #000000; line-height: 170%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 170%;">UNSUBSCRIBE   |   PRIVACY POLICY   |   WEB</p>
        <p style="font-size: 14px; line-height: 170%;"> </p>
        <p style="font-size: 14px; line-height: 170%;"> </p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Raleway',sans-serif;" align="left">
                
          <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #000000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
              <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <span>&#160;</span>
                </td>
              </tr>
            </tbody>
          </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
        </div>
        
        
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
        
        </html>
        
        `
    })
    .catch((err)=> console.log(err))
}