/**
 * MageSpecialist
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to info@magespecialist.it so we can send you a copy immediately.
 *
 * @category   MSP
 * @package    MSP_DevTools
 * @copyright  Copyright (c) 2017 Skeeller srl (http://www.magespecialist.it)
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

var port = chrome.runtime.connect({
  name: "devtools:" + chrome.devtools.inspectedWindow.tabId
});

chrome.devtools.panels.create(
  "Magento",
  null,
  "panel/panel.html",
  null
);

chrome.devtools.panels.elements.createSidebarPane(
  "Magento",
  function (sidebar) {
    sidebar.setPage('inspector.html');
  }
);
