/**
 * Author: Md. Mithon Islam
 * Dec: Multiple Converter
 * Project 19 (Part 9) - 4
*/

// ############### All Converter Main Data Start ################
const converter = {
  area: {
    name: 'Area',
    units: {
      squareKilometer: 'Square Kilometer',
      squareMeter: 'Square Meter',
      squareFoot: 'Square Foot',
      squareInch: 'Square Inch'
    },
    variants: {
      'squareKilometer:squareMeter': {
        formula: 'divide the area value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'squareKilometer:squareFoot': {
        formula: 'for an approximate result, multiply the area value by 1.076e+7',
        calculation(n){
          return n * new Number('1.076e+7')
        }
      },
      'squareKilometer:squareInch': {
        formula: 'multiply the area value by 1.55e+9',
        calculation(n){
          return n * new Number('1.55e+9')
        }
      },
      'squareMeter:squareKilometer': {
        formula: 'divide the area value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'squareMeter:squareFoot': {
        formula: 'multiply the area value by 10.764',
        calculation(n){
          return n * 10.764
        }
      },
      'squareMeter:squareInch': {
        formula: 'for an approximate result, multiply the area value by 1550',
        calculation(n){
          return n * 1550
        }
      },
      'squareFoot:squareKilometer': {
        formula: 'for an approximate result, divide the area value by 1.076e+7',
        calculation(n){
          return n / new Number('1.076e+7')
        }
      },
      'squareFoot:squareMeter': {
        formula: 'divide the area value by 10.764',
        calculation(n){
          return n / 10.754
        }
      },
      'squareFoot:squareInch': {
        formula: 'multiply the area value by 144',
        calculation(n){
          return n * 144
        }
      },
      'squareInch:squareKilometer': {
        formula: 'divide the area value by 1.55e+9',
        calculation(n){
          return n / new Number('1.55e+9')
        }
      },
      'squareInch:squareMeter': {
        formula: 'for an approximate result, divide the area value by 1550',
        calculation(n){
          return n / 1550
        }
      },
      'squareInch:squareFoot': {
        formula: 'divide the area value by 144',
        calculation(n){
          return n / 144
        }
      }
    }
  },
  time: {
    name: 'Time',
    units: {
      second: 'Second',
      minute: 'Minute',
      hour: 'Hour',
      day: 'Day',
      week: 'Week',
      month: 'Month'
    },
    variants: {
      'second:minute': {
        formula: 'divide the time value by 60',
        calculation(n){
          return n / 60
        }
      },
      'second:hour': {
        formula: 'divide the time value by 3600',
        calculation(n){
          return n / 3600
        }
      },
      'second:day': {
        formula: 'divide the time value by 86400',
        calculation(n){
          return n / 86400
        }
      },
      'second:week': {
        formula: 'divide the time value by 604800',
        calculation(n){
          return n / 604800
        }
      },
      'second:month': {
        formula: 'divide the time value by 2.628e+6',
        calculation(n){
          return n / new Number('2.628e+6')
        }
      },
      'minute:second': {
        formula: 'multiply the time value by 60',
        calculation(n){
          return n * 60
        }
      },
      'minute:hour': {
        formula: 'divide the time value by 60',
        calculation(n){
          return n / 60
        }
      },
      'minute:day': {
        formula: 'divide the time value by 1440',
        calculation(n){
          return n / 1440
        }
      },
      'minute:week': {
        formula: 'divide the time value by 10080',
        calculation(n){
          return n / 10080
        }
      },
      'minute:month': {
        formula: 'for an approximate result, divide the time value by 43800',
        calculation(n){
          return n / 43800
        }
      },
      'hour:second': {
        formula: 'multiply the time value by 3600',
        calculation(n){
          return n * 3600
        }
      },
      'hour:minute': {
        formula: 'multiply the time value by 60',
        calculation(n){
          return n * 60
        }
      },
      'hour:day': {
        formula: 'divide the time value by 24',
        calculation(n){
          return n / 24
        }
      },
      'hour:week': {
        formula: 'divide the time value by 168',
        calculation(n){
          return n / 168
        }
      },
      'hour:month': {
        formula: 'for an approximate result, divide the time value by 730',
        calculation(n){
          return n / 730
        }
      },
      'day:second': {
        formula: 'multiply the time value by 86400',
        calculation(n){
          return n * 86400
        }
      },
      'day:minute': {
        formula: 'multiply the time value by 1440',
        calculation(n){
          return n * 1440
        }
      },
      'day:hour': {
        formula: 'multiply the time value by 24',
        calculation(n){
          return n * 24
        }
      },
      'day:week': {
        formula: 'divide the time value by 7',
        calculation(n){
          return n / 7
        }
      },
      'day:month': {
        formula: 'for an approximate result, divide the time value by 30.417',
        calculation(n){
          return n / 30.417
        }
      },
      'week:second': {
        formula: 'multiply the time value by 604800',
        calculation(n){
          return n * 604800
        }
      },
      'week:minute': {
        formula: 'multiply the time value 10080',
        calculation(n){
          return n * 10080
        }
      },
      'week:hour': {
        formula: 'multiply the time value by 168',
        calculation(n){
          return n * 168
        }
      },
      'week:day': {
        formula: 'multiply the time value by 7',
        calculation(n){
          return n * 7
        }
      },
      'week:month': {
        formula: 'for an approximate result, divide the time value by 4.345',
        calculation(n){
          return n / 4.345
        }
      },
      'month:second': {
        formula: 'multiply the time value by 2.628e+6',
        calculation(n){
          return n * new Number('2.628e+6')
        }
      },
      'month:minute': {
        formula: 'for an approximate result, multiply the time value by 43800',
        calculation(n){
          return n * 43800
        }
      },
      'month:hour': {
        formula: 'for an approximate result, multiply the time value by 730',
        calculation(n){
          return n * 730
        }
      },
      'month:day': {
        formula: 'for an approximate result, multiply the time value by 30.417',
        calculation(n){
          return n * 30.417
        }
      },
      'month:week': {
        formula: 'for an approximate result, multiply the time value by 4.345',
        calculation(n){
          return n * 4.345
        }
      }
    }
  },
  mess: {
    name: 'Mess',
    units: {
      tonne: 'Tonne',
      kilogram: 'Kilogram',
      gram: 'Gram',
      milligram: 'Milligram',
      microgram: 'Microgram'
    },
    variants: {
      'tonne:kilogram': {
        formula: 'multiply the mass value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'tonne:gram': {
        formula: 'multiply the mass value by 1e+6',
        calculation(n){
          return n * new Number('1e+6')
        }
      },
      'tonne:milligram': {
        formula: 'multiply the mass value by 1e+9',
        calculation(n){
          return n * new Number('1e+9')
        }
      },
      'tonne:microgram': {
        formula: 'for an approximate result, multiply the mass value by 1e+12',
        calculation(n){
          return n * new Number('1e+12')
        }
      },
      'kilogram:tonne': {
        formula: 'divide the mass value by 1e+12',
        calculation(n){
          return n / new Number('1e+12')
        }
      },
      'kilogram:gram': {
        formula: 'divide the mass value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'kilogram:milligram': {
        formula: 'divide the mass value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'kilogram:microgram': {
        formula: 'multiply the mass value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'gram:tonne': {
        formula: 'divide the mass value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'gram:kilogram': {
        formula: 'divide the mass value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'gram:milligram': {
        formula: 'multiply the mass value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'gram:microgram': {
        formula: 'multiply the mass value by 1e+6',
        calculation(n){
          return n * new Number('1e+6')
        }
      },
      'milligram:tonne': {
        formula: 'divide the mass value by 1e+9',
        calculation(n){
          return n / new Number('1e+9')
        }
      },
      'milligram:kilogram': {
        formula: 'divide the mass value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'milligram:gram': {
        formula: 'divide the mass value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'milligram:microgram': {
        formula: 'multiply the mass value by 1000 ',
        calculation(n){
          return n * 1000
        }
      },
      'microgram:tonne': {
        formula: 'divide the mass value by 1e+12',
        calculation(n){
          return n / new Number('1e+12')
        }
      },
      'microgram:kilogram': {
        formula: 'divide the mass value by 1e+9',
        calculation(n){
          return n / new Number('1e+9')
        }
      },
      'microgram:gram': {
        formula: 'divide the mass value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'microgram:milligram': {
        formula: 'divide the mass value by 1000',
        calculation(n){
          return n / 1000
        }
      }
    }
  },
  length: {
    name: 'Length',
    units: {
      kilometer: 'Kilometer',
      meter: 'Meter',
      centimeter: 'Centimeter',
      millimeter: 'Millimeter',
      micrometers: 'Micrometers',
      nanometer: 'Nanometer',
      foot: 'Foot',
      inch: 'Inch'
    },
    variants: {
      'kilometer:meter': {
        formula: 'multiply the length value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'kilometer:centimeter': {
        formula: 'multiply the length value by 100000',
        calculation(n){
          return n * 100000
        }
      },
      'kilometer:millimeter': {
        formula: 'multiply the length value by 1e+6',
        calculation(n){
          return n * new Number('1e+6')
        }
      },
      'kilometer:micrometers': {
        formula: 'multiply the length value by 1e+9',
        calculation(n){
          return n * new Number('1e+9')
        }
      },
      'kilometer:nanometer': {
        formula: 'for an approximate result, multiply the length value by 1e+12',
        calculation(n){
          return n * new Number('1e+12')
        }
      },
      'kilometer:foot': {
        formula: 'for an approximate result, multiply the length value by 3281',
        calculation(n){
          return n * 3281
        }
      },
      'kilometer:inch': {
        formula: 'for an approximate result, multiply the length value by 39370',
        calculation(n){
          return n * 39370
        }
      },
      'meter:kilometer': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'meter:centimeter': {
        formula: 'multiply the length value by 100',
        calculation(n){
          return n * 100
        }
      },
      'meter:millimeter': {
        formula: 'multiply the length value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'meter:micrometers': {
        formula: 'multiply the length value by 1e+6',
        calculation(n){
          return n * new Number('1e+6')
        }
      },
      'meter:nanometer': {
        formula: 'for an approximate result, multiply the length value by 1e+9',
        calculation(n){
          return n * new Number('1e+9')
        }
      },
      'meter:foot': {
        formula: 'for an approximate result, multiply the length value by 3.281',
        calculation(n){
          return n * 3.281
        }
      },
      'meter:inch': {
        formula: 'multiply the length value by 39.37',
        calculation(n){
          return n * 39.37
        }
      },
      'centimeter:kilometer': {
        formula: 'divide the length value by 100000',
        calculation(n){
          return n / 100000
        }
      },
      'centimeter:meter': {
        formula: 'divide the length value by 100',
        calculation(n){
          return n / 100
        }
      },
      'centimeter:millimeter': {
        formula: 'multiply the length value by 10',
        calculation(n){
          return n * 10
        }
      },
      'centimeter:micrometers': {
        formula: 'multiply the length value by 10000',
        calculation(n){
          return n * 10000
        }
      },
      'centimeter:nanometer': {
        formula: 'multiply the length value by 1e+7',
        calculation(n){
          return n * new Number('1e+7')
        }
      },
      'centimeter:foot': {
        formula: 'divide the length value by 30.48',
        calculation(n){
          return n / 30.48
        }
      },
      'centimeter:inch': {
        formula: 'divide the length value by 2.54',
        calculation(n){
          return n / 2.54
        }
      },
      'millimeter:kilometer': {
        formula: 'divide the length value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'millimeter:meter': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'millimeter:centimeter': {
        formula: 'divide the length value by 10',
        calculation(n){
          return n / 10
        }
      },
      'millimeter:micrometers': {
        formula: 'multiply the length value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'millimeter:nanometer': {
        formula: 'multiply the length value by 1e+6',
        calculation(n){
          return n * new Number('1e+6')
        }
      },
      'millimeter:foot': {
        formula: 'divide the length value by 304.8',
        calculation(n){
          return n / 304.8
        }
      },
      'millimeter:inch': {
        formula: 'divide the length value by 25.4',
        calculation(n){
          return n / 25.4
        }
      },
      'micrometer:kilometer': {
        formula: 'divide the length value by 1e+9',
        calculation(n){
          return n / new Number('1e+9')
        }
      },
      'micrometer:meter': {
        formula: 'divide the length value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'micrometer:centimeter': {
        formula: 'divide the length value by 10000',
        calculation(n){
          return n / 10000
        }
      },
      'micrometer:millimeter': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'micrometer:nanometer': {
        formula: 'multiply the length value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'micrometer:foot': {
        formula: 'divide the length value by 304800',
        calculation(n){
          return n / 304800
        }
      },
      'micrometer:inch': {
        formula: 'divide the length value by 25400',
        calculation(n){
          return n / 25400
        }
      },
      'nanometer:kilometer': {
        formula: 'divide the length value by 1e+12',
        calculation(n){
          return n / new Number('1e+12')
        }
      },
      'nanometer:meter': {
        formula: 'divide the length value by 1e+9',
        calculation(n){
          return n / new Number('1e+9')
        }
      },
      'nanometer:centimeter': {
        formula: 'divide the length value by 1e+7',
        calculation(n){
          return n / new Number('1e+7')
        }
      },
      'nanometer:millimeter': {
        formula: 'divide the length value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'nanometer:micrometer': {
        formula: 'divide the length value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'nanometer:foot': {
        formula: 'divide the length value by 3.048e+8',
        calculation(n){
          return n / new Number('3.048e+8')
        }
      },
      'nanometer:inch': {
        formula: 'divide the length value by 2.54e+7',
        calculation(n){
          return n / new Number('2.54e+7')
        }
      },
      'foot:kilometer': {
        formula: 'for an approximate result, divide the length value by 3281',
        calculation(n){
          return n / 3281
        }
      },
      'foot:meter': {
        formula: 'for an approximate result, divide the length value by 3.281',
        calculation(n){
          return n / 3.281
        }
      },
      'foot:centimeter': {
        formula: 'multiply the length value by 30.48',
        calculation(n){
          return n * 30.48
        }
      },
      'foot:millimeter': {
        formula: 'multiply the length value by 304.8',
        calculation(n){
          return n * 304.8
        }
      },
      'foot:micrometer': {
        formula: 'multiply the length value by 304800',
        calculation(n){
          return n * 304800
        }
      },
      'foot:nanometer': {
        formula: 'multiply the length value by 3.048e+8',
        calculation(n){
          return n * new Number('3.048e+8')
        }
      },
      'foot:inch': {
        formula: 'multiply the length value by 12',
        calculation(n){
          return n * 12
        }
      },
      'inch:kilometer': {
        formula: 'for an approximate result, divide the length value by 39370',
        calculation(n){
          return n / 39370
        }
      },
      'inch:meter': {
        formula: 'divide the length value by 39.37',
        calculation(n){
          return n / 39.37
        }
      },
      'inch:centimeter': {
        formula: 'multiply the length value by 2.54',
        calculation(n){
          return n * 2.54
        }
      },
      'inch:millimeter': {
        formula: 'multiply the length value by 25.4',
        calculation(n){
          return n * 25.4
        }
      },
      'inch:micrometer': {
        formula: 'multiply the length value by 25400',
        calculation(n){
          return n * 25400
        }
      },
      'inch:nanometer': {
        formula: 'multiply the length value by 2.54e+7',
        calculation(n){
          return n * new Number('2.54e+7')
        }
      },
      'inch:foot': {
        formula: 'divide the length value by 12',
        calculation(n){
          return n / 12
        }
      },
    }
  },
  frequency: {
    name: 'Frequency',
    units: {
      hertz: 'Hertz',
      kilohertz: 'Kilohertz',
      megahertz: 'Megahertz',
      gigahertz: 'Gigahertz'
    },
    variants: {
      'hertz:kilohertz': {
        formula: 'divide the frequency value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'hertz:megahertz': {
        formula: 'divide the frequency value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'hertz:gigahertz': {
        formula: 'divide the frequency value by 1e+9',
        calculation(n){
          return n / new Number('1e+9')
        }
      },
      'kilohertz:hertz': {
        formula: 'multiply the frequency value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'kilohertz:megahertz': {
        formula: 'divide the frequency value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'kilohertz:gigahertz': {
        formula: 'divide the frequency value by 1e+6',
        calculation(n){
          return n / new Number('1e+6')
        }
      },
      'megahertz:hertz': {
        formula: 'multiply the frequency value by 1e+6',
        calculation(n){
          return n * new Number('1e+6')
        }
      },
      'megahertz:kilohertz': {
        formula: 'multiply the frequency value by 1000',
        calculation(n){
          return n * 1000
        }
      },
      'megahertz:gigahertz': {
        formula: 'divide the frequency value by 1000',
        calculation(n){
          return n / 1000
        }
      },
      'gigahertz:hertz': {
        formula: 'multiply the frequency value by 1e+9',
        calculation(n){
          return n * new Number('1e+9')
        }
      },
      'gigahertz:kilohertz': {
        formula: 'multiply the frequency value by 1e+6',
        calculation(n){
          return n * new Number('1e+6')
        }
      },
      'gigahertz:megahertz': {
        formula: 'multiply the frequency value by 1000',
        calculation(n){
          return n * 1000
        }
      },
    }
  },
  pressure: {
    name: 'Pressure',
    units: {
      bar: 'Bar',
      pascal: 'Pascal',
      poundPerSquareInch: 'Pound Per Square Inch',
      standardAtmosphere: 'Standard Atmosphere',
      torr: 'Torr'
    },
    variants: {
      'bar:pascal': {
        formula: 'multiply the pressure value by 100000',
        calculation(n){
          return n * 100000
        }
      },
      'bar:poundPerSquareInch': {
        formula: 'for an approximate result, multiply the pressure value by 14.504',
        calculation(n){
          return n * 14.504
        }
      },
      'bar:standardAtmosphere': {
        formula: 'for an approximate result, divide the pressure value by 1.013',
        calculation(n){
          return n / 1.013
        }
      },
      'bar:torr': {
        formula: 'for an approximate result, multiply the pressure value by 750.1',
        calculation(n){
          return n * 750.062
        }
      },
      'pascal:bar': {
        formula: 'divide the pressure value by 100000',
        calculation(n){
          return n / 100000
        }
      },
      'pascal:poundPerSquareInch': {
        formula: 'for an approximate result, divide the pressure value by 6895',
        calculation(n){
          return n / 6895
        }
      },
      'pascal:standardAtmosphere': {
        formula: 'for an approximate result, divide the pressure value by 101300',
        calculation(n){
          return n / 101300
        }
      },
      'pascal:torr': {
        formula: 'for an approximate result, divide the pressure value by 133.3',
        calculation(n){
          return n / 133.3
        }
      },
      'poundPerSquareInch:bar': {
        formula: 'for an approximate result, divide the pressure value by 14.504',
        calculation(n){
          return n / 14.504
        }
      },
      'poundPerSquareInch:pascal': {
        formula: 'for an approximate result, multiply the pressure value by 6895',
        calculation(n){
          return n * 6895
        }
      },
      'poundPerSquareInch:standardAtmosphere': {
        formula: 'divide the pressure value by 14.696',
        calculation(n){
          return n / 14.696
        }
      },
      'poundPerSquareInch:torr': {
        formula: 'multiply the pressure value by 51.715',
        calculation(n){
          return n * 51.715
        }
      },
      'standardAtmosphere:bar': {
        formula: 'for an approximate result, multiply the pressure value by 1.013',
        calculation(n){
          return n * 1.013
        }
      },
      'standardAtmosphere:pascal': {
        formula: 'for an approximate result, multiply the pressure value by 101300',
        calculation(n){
          return n * 101300
        }
      },
      'standardAtmosphere:poundPerSquareInch': {
        formula: 'multiply the pressure value by 14.696',
        calculation(n){
          return n * 14.696
        }
      },
      'standardAtmosphere:torr': {
        formula: 'multiply the pressure value by 760',
        calculation(n){
          return n * 760
        }
      },
      'torr:bar': {
        formula: 'for an approximate result, divide the pressure value by 750.1',
        calculation(n){
          return n / 750.1
        }
      },
      'torr:pascal': {
        formula: 'for an approximate result, multiply the pressure value by 133.3',
        calculation(n){
          return n * 133.3
        }
      },
      'torr:poundPerSquareInch': {
        formula: 'divide the pressure value by 51.715',
        calculation(n){
          return n / 51.715
        }
      },
      'torr:standardAtmosphere': {
        formula: 'divide the pressure value by 760',
        calculation(n){
          return n / 760
        }
      },
    }
  },
  temperature: {
    name: 'Temperature',
    units: {
      celsius: 'Celsius',
      fahrenheit: 'Fahrenheit',
      kelvin: 'Kelvin'
    },
    variants: {
      'celsius:fahrenheit': {
        formula: '(°C * 9/5) + 32 = °F',
        calculation(n){
          let answer = (n * 9/5) + 32
          return answer
        }
      },
      'celsius:kelvin': {
        formula: '°C + 273.15 = K',
        calculation(n){
          let answer = n + 273.15
          return answer
        }
      },
      'fahrenheit:celsius': {
        formula: '(°F - 32) * 5/9 = °C',
        calculation(n){
          let answer = (n - 32) * 5/9
          return answer
        }
      },
      'fahrenheit:kelvin': {
        formula: '(°F - 32) * 5/9 + 273.15 = K',
        calculation(n){
          let answer = (n - 32) * 5/9 + 273.15
          return answer
        }
      },
      'kelvin:celsius': {
        formula: 'K - 273.15 = °C',
        calculation(n){
          let answer = n - 273.15
          return answer
        }
      },
      'kelvin:fahrenheit': {
        formula: '(K - 273.15) * 9/5 + 32 = °F',
        calculation(n){
          let answer = (n - 273.15) * 9/5 + 32
          return answer
        }
      },
    }
  }
};
// ############# All Converter Main Data End #############




// ************* Window Onload ***************
window.onload = () =>{
  main()
}

// ****************** Global *******************
let lastLeftSelectedValue = '';
let lastRightSelectedValue = '';

// ******************* Main Functions *******************
function main(){
  const categorySelect = document.getElementById('category-select')
  const leftInputEl = document.getElementById('left-input')
  const rightInputEl = document.getElementById('right-input')
  const leftSelect = document.getElementById('left-select')
  const rightSelect = document.getElementById('right-select')

  const converterKeys = Object.keys(converter).sort();
  removeAllChild(categorySelect)
  converterKeys.forEach((item) => {
    addOption(categorySelect, {value: item, text: converter[item].name})
  })

  // Set Default Category Units
  updateCategoryChanges(categorySelect, leftSelect, rightSelect)




  categorySelect.addEventListener('change', function(){
    updateCategoryChanges(categorySelect, leftSelect, rightSelect)
  })

  leftInputEl.addEventListener('keyup', function(event){
    if(event.target.value && !isNaN(event.target.value)){
      const formulaText = document.getElementById('formula-text')
      const converterName = categorySelect.value
      const variants = converter[converterName].variants
      const variantsKey = `${leftSelect.value}:${rightSelect.value}`
      const variant = variants[variantsKey]
      formulaText.innerText = variant.formula;
      leftInputEl.value = Number(event.target.value)
      rightInputEl.value = variant.calculation( Number(event.target.value))
    } else{
      rightInputEl.value = '';
    }
  })

  rightInputEl.addEventListener('keyup', function(event){
    if(event.target.value && !isNaN(event.target.value)){
      const formulaText = document.getElementById('formula-text')
      const converterName = categorySelect.value
      const variants = converter[converterName].variants
      const variantsKey = `${leftSelect.value}:${rightSelect.value}`
      const variant = variants[variantsKey]
      formulaText.innerText = variant.formula;
      rightInputEl.value = Number(event.target.value)
      leftInputEl.value = variant.calculation( Number(event.target.value))
    } else{
      leftInputEl.value = '';
    }
  })

  leftSelect.addEventListener('change', function(event){
    if(event.target.value === rightSelect.value){
      const option = rightSelect.getElementsByTagName('option')
      for(let i = 0; i < option.length; i++){
        if(lastLeftSelectedValue === option[i].value){
          option[i].selected = 'selected'
          lastRightSelectedValue = option[i].value
          break
        }
      }
    }
    lastRightSelectedValue = event.target.value
  })

  rightSelect.addEventListener('change', function(event){
    if(event.target.value === leftSelect.value){
      const option = leftSelect.getElementsByTagName('option')
      for(let i = 0; i < option.length; i++){
        if(lastRightSelectedValue === option[i].value){
          option[i].selected = 'selected'
          lastLeftSelectedValue = option[i].value
          break
        }
      }
    }
    lastRightSelectedValue = event.target.value
  })
}

// ******************* Add Option Functions *******************
function addOption(parent, option){
  const optionEl = document.createElement('option')
  optionEl.setAttribute('value', option.value)
  optionEl.innerText = option.text

  parent.appendChild(optionEl)
}

// ******************* Remove All Child Functions *******************
function removeAllChild(parent){
  while(parent.firstChild){
    parent.firstChild.remove();
  }
}

// ******************* Handle Category Changes  Functions *******************
function updateCategoryChanges(categorySelect, leftSelect, rightSelect){
  const converterName = categorySelect.value
  const units = converter[converterName].units
  const options = Object.keys(units).sort()

  // handle left select
  removeAllChild(leftSelect)
  options.forEach(item => {
    addOption(leftSelect, {value: item, text: units[item]})
  })
  lastLeftSelectedValue = leftSelect.value
  
  // handle right select
  removeAllChild(rightSelect)
  options.forEach(item => {
    addOption(rightSelect, {value: item, text: units[item]})
  })

  // Change Default Option Of Right Select
  rightSelect.getElementsByTagName('option')[1].selected = 'selected'
  lastRightSelectedValue = rightSelect.value
}


// ******************* Calculate Value Functions *******************
function calculateValue(categorySelect, leftSelect, rightSelect, leftInputEl, rightInputEl, formulaText){
  const converterName = categorySelect.value
  const variants = converter[converterName].variants
  const variantsKey = `${leftSelect.value}:${rightSelect.value}`
  const variant = variants[variantsKey]
  formulaText.innerText = variant.formula;
  leftInputEl.value = 1
  rightInputEl.value = variant.calculation(1)
}