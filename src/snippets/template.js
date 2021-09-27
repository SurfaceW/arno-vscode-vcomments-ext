// ?prefix=//license&description=license-documentation
/**
 * @license
 * Copyright $1 All Rights Reserved.
 *
 * Use of this source code is governed by an $2 license that can be
 * found in the LICENSE file at $3
 */
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//table&description=text table comments
/**
 * Generate table notes with online tool:
 * 
 * @see https://www.tablesgenerator.com/text_tables
 * NOTE: This will not match namespaced attributes.
 *
 * Attribute matching depends upon `isInlineTemplate` and `isProjectionMode`.
 * The following table summarizes which types of attributes we attempt to match:
 *
 * ===========================================================================================================
 * Modes                   | Normal Attributes | Bindings Attributes | Template Attributes | I18n
 * Attributes
 * ===========================================================================================================
 * Inline + Projection     | YES               | YES                 | NO                  | YES
 * -----------------------------------------------------------------------------------------------------------
 * Inline + Directive      | NO                | NO                  | YES                 | NO
 * -----------------------------------------------------------------------------------------------------------
 * Non-inline + Projection | YES               | YES                 | NO                  | YES
 * -----------------------------------------------------------------------------------------------------------
 * Non-inline + Directive  | YES               | YES                 | NO                  | YES
 * ===========================================================================================================
 */
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//ascii-diagram1&description=ascii text diagram example
/**
 * Ascii Editor comment with graph
 * Bindings for pure functions are stored after regular bindings.
 * @see https://docs.asciidoctor.org/asciidoctor/latest/
 *
 * |-------decls------|---------vars---------|                 |----- hostVars (dir1) ------|
 * ------------------------------------------------------------------------------------------
 * | nodes/refs/pipes | bindings | fn slots  | injector | dir1 | host bindings | host slots |
 * ------------------------------------------------------------------------------------------
 *                    ^                      ^
 *      TView.bindingStartIndex      TView.expandoStartIndex
 *
 * Pure function instructions are given an offset from the binding root. Adding the offset to the
 * binding root gives the first index where the bindings are stored. In component views, the binding
 * root is the bindingStartIndex. In host bindings, the binding root is the expandoStartIndex +
 * any directive instances + any hostVars in directives evaluated before it.
 *
 * See VIEW_DATA.md for more information about host binding resolution.
 */
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//ascii-diagram2&description=ascii text diagram example
// ASCII Editor diagram
// @see https://docs.asciidoctor.org/asciidoctor/latest/
//
//            NH          NH, EH-length      NH, EH-length
//            +-------+      +------+            +-------+
//            |       |      |      |            |       |
//            |       v      |      v            |       v
//      +-------------+-------------+-//-+---------------+--------------+
//      |             |             |    |               |              |
//      |    IPv6     |    Ext.     |    |     Ext.      |  Upper-Layer |
//      |    header   |    Header   |    |     Header    |  Protocol    |
//      |             |             |    |               |              |
//      +-------------+-------------+-//-+---------------+--------------+
//       fixed length    variable number of EHs & length
//      <------------> <-------------------------------->
//                       Figure 2: IPv6 Packet Structure
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//ascii-diagram3&description=ascii text diagram example
// ASCII Editor diagram 
// @see https://docs.asciidoctor.org/asciidoctor/latest/
// Make collision box adjustments,
// Central box is adjusted to the size as one box.
//      ____        ______        ________
//    _|   |-|    _|     |-|    _|       |-|
//   | |<->| |   | |<--->| |   | |<----->| |
//   | | 1 | |   | |  2  | |   | |   3   | |
//   |_|___|_|   |_|_____|_|   |_|_______|_|
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//pic-buddian&description=ascii text picture example
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//pic-alpaca&description=ascii text picture example
// ################################################################
// #
// #        ┏┓　　　┏┓+ +
// #　　　┏┛┻━━━┛┻┓ + +
// #　　　┃　　　　　　　┃ 　
// #　　　┃　　　━　　　┃ ++ + + +
// #　　 ████━████ ┃+
// #　　　┃　　　　　　　┃ +
// #　　　┃　　　┻　　　┃
// #　　　┃　　　　　　　┃ + +
// #　　　┗━┓　　　┏━┛
// #　　　　　┃　　　┃　　　　　　　　　　　
// #　　　　　┃　　　┃ + + + +
// #　　　　　┃　　　┃　　　　Codes are far away from bugs with the animal protecting　　　
// #　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug　　
// #　　　　　┃　　　┃
// #　　　　　┃　　　┃　　+　　　　　　　　　
// #　　　　　┃　 　　┗━━━┓ + +
// #　　　　　┃ 　　　　　　　┣┓
// #　　　　　┃ 　　　　　　　┏┛
// #　　　　　┗┓┓┏━┳┓┏┛ + + + +
// #　　　　　　┃┫┫　┃┫┫
// #　　　　　　┗┻┛　┗┻┛+ + + +
// #
// #
// ###############################################################
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//big-text&description=ascii large text example
// @see https://onlineasciitools.com/convert-text-to-ascii-art
//.......................................................................................................
//.DDDDDDDDDD............AAAAA.......NNNN.......NNNN......GGGGGGGGG.....GEEEEEEEEEEEEE..RRRRRRRRRRR......
//.DDDDDDDDDDDD..........AAAAA.......NNNNN......NNNN.....GGGGGGGGGGG....GEEEEEEEEEEEEE..RRRRRRRRRRRRR....
//.DDDDDDDDDDDDDD.......AAAAAAA......NNNNN......NNNN....GGGGGGGGGGGGG...GEEEEEEEEEEEEE..RRRRRRRRRRRRRR...
//.DDDDDDDDDDDDDD.......AAAAAAA......NNNNNN.....NNNN...GGGGGGGGGGGGGGG..GEEEEEEEEEEEEE..RRRRRRRRRRRRRR...
//.DDDD.....DDDDDD......AAAAAAA......NNNNNNN....NNNN...GGGGG.....GGGGG..GEEE............RRRR......RRRR...
//.DDDD.......DDDD.....AAAAAAAAA.....NNNNNNN....NNNN..NGGGG.......GGGG..GEEE............RRRR......RRRR...
//.DDDD.......DDDDD....AAAA.AAAA.....NNNNNNNN...NNNN..NGGG........GGGGG.GEEE............RRRR......RRRR...
//.DDDD........DDDD...AAAAA.AAAA.....NNNNNNNNN..NNNN..NGGG..............GEEEEEEEEEEEE...RRRR....RRRRRR...
//.DDDD........DDDD...AAAA..AAAAA....NNNNNNNNN..NNNN..NGGG....GGGGGGGGG.GEEEEEEEEEEEE...RRRRRRRRRRRRRR...
//.DDDD........DDDD...AAAA...AAAA....NNNN.NNNNN.NNNN..NGGG....GGGGGGGGG.GEEEEEEEEEEEE...RRRRRRRRRRRRR....
//.DDDD........DDDD..AAAAA...AAAAA...NNNN..NNNNNNNNN..NGGG....GGGGGGGGG.GEEEEEEEEEEEE...RRRRRRRRRRRRR....
//.DDDD........DDDD..AAAAAAAAAAAAA...NNNN..NNNNNNNNN..NGGG....GGGGGGGGG.GEEE............RRRRRRRRRRRRRR...
//.DDDD.......DDDDD.DAAAAAAAAAAAAA...NNNN...NNNNNNNN..NGGGG........GGGG.GEEE............RRRR.....RRRRR...
//.DDDD......DDDDD..DAAAAAAAAAAAAAA..NNNN....NNNNNNN..NGGGG........GGGG.GEEE............RRRR......RRRR...
//.DDDD....DDDDDDD..DAAA.......AAAA..NNNN....NNNNNNN...GGGGGG.....GGGGG.GEEE............RRRR......RRRR...
//.DDDDDDDDDDDDDD..DDAAA.......AAAA..NNNN.....NNNNNN...GGGGGGGGGGGGGGGG.GEEEEEEEEEEEEE..RRRR......RRRRR..
//.DDDDDDDDDDDDD...DDAAA.......AAAAA.NNNN......NNNNN....GGGGGGGGGGGGGGG.GEEEEEEEEEEEEE..RRRR......RRRRR..
//.DDDDDDDDDDDD....DDAA.........AAAA.NNNN......NNNNN......GGGGGGGGGGG...GEEEEEEEEEEEEE..RRRR.......RRRR..
//..........................................................GGGGGG.......................................
//.......................................................................................................
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//dingtalk&description=dingtalk ascii pic comment
// ASCII Picture generator @see https://ascii-generator.site/
//                                                         
//                  ....::::::::::....                     
//              ..::::::::::::::::::::::..                 
//           .::::::::::::::::::::::::::::::.              
//         .::::::::::::::::::::::::::::::::::.            
//       .::::...:::::::::::::::::::::::::::::::.          
//     .::::::.    ..:::::::::::::::::::::::::::::.        
//    .:::::::.         ..:::::::::::::::::::::::::.       
//   .:::::::::.             ..:::::::::::::::::::::.      
//  .:::::::::::.                 ...::::::::::::::::.     
// .::::::::::::.....                   ..::::::::::::.    
// .::::::::::::.                         .::::::::::::    
// ::::::::::::::.                        .::::::::::::    
// ::::::::::::::::.                     .:::::::::::::    
// ::::::::::::::::::...                .::::::::::::::    
// ::::::::::::::::::.                 .:::::::::::::::    
// .::::::::::::::::::..              .::::::::::::::::    
// .::::::::::::::::::::::....:         .:::::::::::::.    
//  .:::::::::::::::::::::::::.        .:::::::::::::.     
//   .::::::::::::::::::::::::....    .:::::::::::::.      
//    .::::::::::::::::::::::::::.  .::::::::::::::.       
//     .::::::::::::::::::::::::.  .::::::::::::::.        
//       .:::::::::::::::::::::: .::::::::::::::.          
//         .::::::::::::::::::::::::::::::::::.            
//           .::::::::::::::::::::::::::::::.              
//              ..::::::::::::::::::::::..                 
//                  ...::::::::::::...
//
//             Code Provided by DingTalk FE Team
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//dingtalk-text&description=dingtalk ascii text comment
// @see https://patorjk.com/software/taag/#p=display&f=Star%20Wars&t=dingtalk
//  _______   __  .__   __.   _______ .___________.    ___       __       __  ___ 
// |       \ |  | |  \ |  |  /  _____||           |   /   \     |  |     |  |/  / 
// |  .--.  ||  | |   \|  | |  |  __  `---|  |----`  /  ^  \    |  |     |  '  /  
// |  |  |  ||  | |  . `  | |  | |_ |     |  |      /  /_\  \   |  |     |    <   
// |  '--'  ||  | |  |\   | |  |__| |     |  |     /  _____  \  |  `----.|  .  \  
// |_______/ |__| |__| \__|  \______|     |__|    /__/     \__\ |_______||__|\__\ 
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//dingtalk-text2&description=dingtalk ascii text2 comment
// @see https://manytools.org/hacker-tools/ascii-banner/
//  ██████████    ███                      ███████████           ████  █████     
// ░░███░░░░███  ░░░                      ░█░░░███░░░█          ░░███ ░░███      
//  ░███   ░░███ ████  ████████    ███████░   ░███  ░   ██████   ░███  ░███ █████
//  ░███    ░███░░███ ░░███░░███  ███░░███    ░███     ░░░░░███  ░███  ░███░░███ 
//  ░███    ░███ ░███  ░███ ░███ ░███ ░███    ░███      ███████  ░███  ░██████░  
//  ░███    ███  ░███  ░███ ░███ ░███ ░███    ░███     ███░░███  ░███  ░███░░███ 
//  ██████████   █████ ████ █████░░███████    █████   ░░████████ █████ ████ █████
// ░░░░░░░░░░   ░░░░░ ░░░░ ░░░░░  ░░░░░███   ░░░░░     ░░░░░░░░ ░░░░░ ░░░░ ░░░░░ 
//                                ███ ░███                                       
//                               ░░██████                                        
//                                ░░░░░░
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//h1&description=title head level 1
// ***************************** $1 ******************************
// * $2                                                          *
// ***************************************************************
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//h2&description=title head level 2
// ============================== $1 =============================
// $2
// ===============================================================
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//h3&description=title head level 3
// ============================= $1 ==============================
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//warning&description=warning comment
// ☢️ WARNING: $1
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//todo&description=todo comment
// 📝 TODO: $1
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//fixme&description=fixme comment
// 🐞 FIXME: $1
// -----------------------------COMMENTSAPLITER -----------------------------------
// prefix=//refactor&description=refactor comment
// 🛠 REFACTOR: $1
