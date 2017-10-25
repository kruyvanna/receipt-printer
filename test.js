var printer = require('./printer')

printer.init({
  type: 'epson', // Printer type: 'star' or 'epson'
  interface: '/dev/usb/lp0', // Printer interface
  characterSet: 'USA', // Printer character set
  removeSpecialCharacters: false, // Removes special characters - default: false
  replaceSpecialCharacters: true, // Replaces special characters listed in config files - default: true
  extraSpecialCharacters: { '£': 163 } // Adds additional special characters to those listed in the config files
})

printer.alignCenter()
printer.println('EUNG ENG KRUY PHONE SHOP')
printer.println('Toul Tompong Corner')
printer.println('017 98 98 23')

printer.tableCustom([
  // Prints table with custom settings (text, align, width, bold)
  { text: '', align: 'LEFT', width: 0.5 },
  { text: '10/12/2017 17:00', align: 'RIGHT', width: 0.5 }
])

printer.drawLine()
// printer.alignLeft();
// printer.println("1. iPhone 6")
// printer.table(["1.iPhone 6 32GB", "1", "645$"]);
// printer.newLine();

printer.tableCustom([
  // Prints table with custom settings (text, align, width, bold)
  { text: '2. iPhone 6 64G', align: 'LEFT', width: 0.5 },
  { text: '89', align: 'CENTER', width: 0.25 },
  { text: '$650', align: 'RIGHT', width: 0.25 }
])

printer.drawLine()

printer.tableCustom([
  // Prints table with custom settings (text, align, width, bold)
  { text: '', align: 'LEFT', width: 0.5 },
  { text: 'TOTAL', align: 'RIGHT', width: 0.25 },
  { text: '$345,650', align: 'RIGHT', width: 0.25 }
])

printer.tableCustom([
  // Prints table with custom settings (text, align, width, bold)
  { text: '', align: 'LEFT', width: 0.5 },
  { text: 'RECEIVED', align: 'RIGHT', width: 0.25 },
  { text: '$345,650', align: 'RIGHT', width: 0.25 }
])

printer.tableCustom([
  // Prints table with custom settings (text, align, width, bold)
  { text: '', align: 'LEFT', width: 0.5 },
  { text: 'CHANGE', align: 'RIGHT', width: 0.25 },
  { text: '$0', align: 'RIGHT', width: 0.25 }
])

printer.cut()
// printer.code128("Code128");

printer.execute(console.log)
