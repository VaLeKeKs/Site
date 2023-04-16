<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>XML to HTML Transformation</title>
      </head>
      <body>
        <h1>XML Data</h1>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th>Element</th>
            <th>Value</th>
          </tr>
          <xsl:for-each select="root/element">
            <tr>
              <td><xsl:value-of select="name()"/></td>
              <td><xsl:value-of select="."/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>