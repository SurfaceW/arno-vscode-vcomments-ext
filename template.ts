/**
 * @license
 * Copyright Alibaba LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
 

/**
 * Examines the attribute's definition array for a node to find the index of the
 * attribute that matches the given `name`.
 *
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

/**
 * Bindings for pure functions are stored after regular bindings.
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

// Make collision box adjustments,
// Central box is adjusted to the size as one box.
//      ____        ______        ________
//    _|   |-|    _|     |-|    _|       |-|
//   | |<->| |   | |<--->| |   | |<----->| |
//   | | 1 | |   | |  2  | |   | |   3   | |
//   |_|___|_|   |_|_____|_|   |_|_______|_|


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

  
// https://codepen.io/sakri/pen/Iklgx
// Comments generators
  
// https://www.tablesgenerator.com/text_tables
// TextTable Generators
 
// PlantUML Generator

 
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
         
https://www.rfc-editor.org/rfc/rfc9115.txt

// max character 120 (it should be configurable)
// ************************ Title Head L1 ************************
// * 1. do something                                             *
// * 2. do something                                             *
// * 3. do something                                             *
// ***************************************************************

// max character 120 (it should be configurable)
// ======================== Title Head L2 ========================
// This is the L2 content
// ===============================================================

// max character 120 (it should be configurable)
// ======================== Title Head L3 ========================


// ⚠️ WARNING: warning tip
// 📝 TODO: todo tip
// 🐞 FIXME: fix me tip
// 🛠 REFACTOR: refactor tip

https://modeling-languages.com/text-uml-tools-complete-list/

https://github.com/asciitosvg/asciitosvg
https://docs.asciidoctor.org/asciidoctor/latest/
  
