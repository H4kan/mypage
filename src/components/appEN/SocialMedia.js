import React from 'react';

import Social from './Social';

import '../../styles/SocialMedia.css';

const socials = [
    {
        name: 'phone',
        title: '667058824',
        src: '#',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAR5SURBVGiB7ZldiFRlGMd/zzk72tYm5hKGXzvjzodfQSCRYiBRQi6KJOuWO+YSVCt9eRF5Y0QE3gSViJnL4oUyjrIgGqHmQhdqIGQRRujOzqwzW5qZbKlJ4c7OPF0ZM7sz63nPOaM3+7ub97zPf/7/ec8578fABBPUBHHSKb0/uAb0fUWagT6L4tvh+C8/1NibEeMG+b5rcWBKw9AOYNOoS38GAiwMteV+r501M6xqFy4mQ9OnNAydYmwIgGn5PHtqZ8ucikEyB5pnj6ieBpaMU9vSnwyur40tc8bcWtme4GP5vJ4GCTuoH6oTWTi3PXu1Bt6MKBuR9LHw5PwwRxyGAGgcUd1VA1/GlAUp/pV/F+EpQ421qUTwRR89uaIsiCCdbkRE2J3aO2umP5bcMfphb3SpM1UC9navZrwwKoheca2k0preH1rn0Y9rRgWRn7yIKfqRl3ovlAcRej3qzfFY75qyINaIfRgoeNA7582Oe8qChDcO/CFw0q2YKl3eLbljzBKliH7iUutsNJ7b59GPa8YEicUHjwFnDXVURDeLoP7YMqfiolFUPjYREfgy0j54xh9L7qgYJBzPHgJOORUpihz1zZFLKo+IoDbWq8BtJyKixc/SyTkLfXVmSNWNVXP8YlpEdjqTkQZFDvbtiT3slzFTqgYBYKq9FfjRkZLKIuuB273n9k1/yAdfxowbJNKSuW0V7Tbgb4d6S+rt+sPpY+HJ3q2ZMf6IAOGXBzIoWww0V+j1kS5VZyc0fnHXIADRDbndItrtWFXpSB8IfuralQsc/2rag53JB79SWOlYXemKZHJvyIcUXbkzwNGIAEgbBQJ1HQL9jtWFznQ02K092K7cGWB8H/cdmD3DKtrfAiHHRSpH6yfl181uu/Sv6fc5xdUDmUoG54lyCnjUoOxEw63htTM6f/untFF7sDPDTR0qsgl4HPSSirwXa88dMfHk+s2S2de8qGgXTgLTDMpSVsFuDW8c+FkVySRDrYpuAyJjeqoc1UK+M9Zx6bITYU+vyHQyuFyV40C9QdkNVd0qImuAFXfpexXRN6Ptg4fuJur5XZ9KNK0UkUOYhTFClR5rUt1bkbbMtWp9fJm0Uom5T4oUj+P+OMkJN0C2RNqz3ZX2Pb7NvunEnAVqWb0oNT2oU+Vr27ZfD68f+LW03ddlRP/BpvkU6AWZ5aduBYYUaYnFs9/daXA8IToh+tLghRGsp4G0n7oVaLQofl7a4GsQgAXx7KAE6pZhsMN0gyLR0s++BwGItGWu3bzV+Bw1PR7SslPRmi+1U4nQayK6HXjQV2FLV0XXD/5/VlCTESkltiHbrcJinO40nfFFaQi4B0EAYu25Pnmkbikq24Bhb2ryzc1bjZvHtHoTNSeVDM5D2SXwjIvy84FhloVeyV0ffeGeB7lDKtH0goh8ADzhsOR8IMCz1f7bv29BAFSRTCK0Wi3egeJykLoqXc8URvKr53dcHqqmdV+DlHJh78xGyw6sEuF5haUCM4AriOyUqfaOSEvG0WHhBBP4zH/9lkuUOHTg3QAAAABJRU5ErkJggg==',
    },
    {
        name: 'email',
        title: 'szymon.sieradzki184@wp.pl',
        src: '#',
        imgSrc: 'data:image/png;base64,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',
    },
    {
        name: 'facebook',
        title: 'Szymon Sieradzki',
        src: 'https://www.facebook.com/szymon.sieradzki.549',
        imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHfSURBVGiB7Zq7SgNBFIb/s6sgiIUIamdSuDZWSh7AR5AgqLHxCWJjq2iroIKPYIKItyfwAbw1VkbUhBSChRYiBHI5tjIz0eyMO44yX3kye/J/HIbdWRbweDxfQe1+KBVHsgDlwRgH0G8xk4pXADcA70S5yrFqgVKkVExtgbGUaDRteDPKVZbFqiRSKo5kwXRoJ5QeTJgemy+ffq4F8jLK2wqkCwFSRlmEMWEljQmMSbGkmAh6LUQxpU8sqET+JF7ENbyIIW8ArbSCIBM0w6F6d2MgRBAxMEfAmU7Drp9O2AFVCptTo7PVe6H+AuAOwH6pkOK4TS1PhBvMQVYhYYzViRDoKFp4uEiit9WJMPggqd5WJxI2w0uxdldIzzB4HcAQDI4LVkWCZutZrDF4F8CgcW/TBnFIL5ZrirKxBOBviO6R6B6JcuW27wTarXk8SA3X63iK+1/OTaTRoIzOdc6JtJil018nOCdC+CciAGmJJLrZxadY1ebXedJV4eBE9PAiruFFXMOLuIYXcQ0v4hoqkXfrKeLzJhZkEcK1lSgmEK7EkiRCoA07afRhZimj8kx9u5daI8JK8pHiQ4TV0fnyulRvd8GnDwYyAHoSTfc9NQDnzLw9tlA5+eUsHs+f5AN8vXMSocLpIgAAAABJRU5ErkJggg==',
    },
    {
        name: 'github',
        title: 'H4kan',
        src: 'https://github.com/H4kan',
        imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2RhYTUyMCI+PHBhdGggZD0iTTY4LjMxNzQ0LDE3OS44NTAyNGMyLjczMDI0LC0xLjE3NTA0IDQuNjQyNTYsLTMuODg5OTIgNC42NDI1NiwtNy4wNTAyNHYtMjAuNzM2YzAsLTAuNzU2NDggMC4wNjE0NCwtMS41NDM2OCAwLjE1NzQ0LC0yLjM0MjRjLTAuMDUzNzYsMC4wMTUzNiAtMC4xMDM2OCwwLjAyNjg4IC0wLjE1NzQ0LDAuMDM4NGMwLDAgLTExLjUyLDAgLTEzLjgyNCwwYy01Ljc2LDAgLTEwLjc1MiwtMi4zMDQgLTEzLjA1NiwtNi45MTJjLTIuNjg4LC00Ljk5MiAtMy44NCwtMTMuNDQgLTEwLjc1MiwtMTguMDQ4Yy0xLjE1MiwtMC43NjggLTAuMzg0LC0xLjkyIDEuOTIsLTEuOTJjMi4zMDQsMC4zODQgNy4yOTYsMy40NTYgMTAuMzY4LDcuNjhjMy40NTYsNC4yMjQgNi45MTIsNy42OCAxMy4wNTYsNy42OGM5LjU1MDA4LDAgMTQuNjY4OCwtMC40OCAxNy43NDg0OCwtMi4xMzEyYzMuNTg2NTYsLTUuMzMzNzYgOC41NTE2OCwtOS4zODg4IDEzLjczOTUyLC05LjM4ODh2LTAuMDk2Yy0yMS43NjUxMiwtMC42OTg4OCAtMzUuNjY5NzYsLTcuOTMzNDQgLTQyLjE0NCwtMTkuMTA0Yy0xNC4wNzM2LDAuMTYxMjggLTI2LjMyNzA0LDEuNTU1MiAtMzMuMzE5NjgsMi43MTQ4OGMtMC4yMjI3MiwtMS4yNTU2OCAtMC40MTQ3MiwtMi41MTkwNCAtMC41Nzk4NCwtMy43OTAwOGM2LjkwMDQ4LC0xLjEzNjY0IDE4LjU5NzEyLC0yLjQ4NDQ4IDMyLjA0NDgsLTIuNzQxNzZjLTAuNDMwMDgsLTEuMDU5ODQgLTAuODAyNTYsLTIuMTQ2NTYgLTEuMTE3NDQsLTMuMjYwMTZjLTEzLjQ4MjI0LC0wLjY4MzUyIC0yNS4xMTc0NCwtMC4xNDk3NiAtMzEuNDM4MDgsMC4zNzI0OGMtMC4wNzY4LC0xLjI3NDg4IC0wLjE4MDQ4LC0yLjU0NTkyIC0wLjE5NTg0LC0zLjgzNjE2YzYuMzMyMTYsLTAuNTE4NCAxNy42NTI0OCwtMS4wMzY4IDMwLjc4OTEyLC0wLjQyNjI0Yy0wLjMwMzM2LC0xLjkyIC0wLjQ5OTIsLTMuODgyMjQgLTAuNDk5MiwtNS45MjUxMmMwLC02LjUyOCAyLjMwNCwtMTMuNDQgNi41MjgsLTE5LjJjLTEuOTIsLTYuNTI4IC00LjYwOCwtMjAuMzUyIDAuNzY4LC0yNS4zNDRjMTAuMzY4LDAgMTcuNjY0LDQuOTkyIDIxLjEyLDguMDY0YzYuNTI0MTYsLTIuNjkxODQgMTMuODIwMTYsLTQuMjI3ODQgMjEuODg0MTYsLTQuMjI3ODRjOC4wNjQsMCAxNS4zNiwxLjUzNiAyMS41MDQsNC4yMjRjMy40NTYsLTMuMDcyIDEwLjc1MiwtOC4wNjQgMjEuMTIsLTguMDY0YzUuNzYsNS4zNzYgMi42ODgsMTkuMiAwLjc2OCwyNS4zNDRjNC4yMjQsNS43NiA2LjUyOCwxMi4yODggNi4xNDQsMTkuMmMwLDEuODU4NTYgLTAuMTcyOCwzLjY1MTg0IC0wLjQyMjQsNS40MTA1NmMxMy40MzYxNiwtMC42NjA0OCAyNS4wNjM2OCwtMC4xMzA1NiAzMS41MDMzNiwwLjM5MTY4Yy0wLjAwNzY4LDEuMjk0MDggLTAuMTI2NzIsMi41NTc0NCAtMC4xOTU4NCwzLjgzNjE2Yy02LjQxNjY0LC0wLjUyOTkyIC0xOC4zMzYsLTEuMDc1MiAtMzIuMDk4NTYsLTAuMzQxNzZjLTAuMzQxNzYsMS4yOTAyNCAtMC43NTY0OCwyLjU0NTkyIC0xLjI0OCwzLjc2MzJjMTMuNjE2NjQsMC4xNzY2NCAyNS41OTM2LDEuNDkzNzYgMzIuODI0MzIsMi42NDU3NmMtMC4xNjUxMiwxLjI3NDg4IC0wLjM1NzEyLDIuNTM4MjQgLTAuNTc5ODQsMy43OTAwOGMtNy4zNDIwOCwtMS4xNzUwNCAtMTkuODU2NjQsLTIuNTQ5NzYgLTM0LjA5NTM2LC0yLjYxODg4Yy02LjM5MzYsMTEuMDUxNTIgLTIwLjA0NDgsMTguMjU5MiAtNDEuMzgzNjgsMTkuMTAwMTZ2MC4xMTkwNGM5Ljk4NCwwIDE5LjIsMTQuOTc2IDE5LjIsMjUuMzQ0djIwLjczNmMwLDMuMTYwMzIgMS45MTIzMiw1Ljg3NTIgNC42NDI1Niw3LjA1MDI0YzM1LjE3ODI0LC0xMS42NDI4OCA2MC42Mzc0NCwtNDQuODIwNDggNjAuNjM3NDQsLTgzLjg1MDI0YzAsLTQ4LjY5ODg4IC0zOS42MTcyOCwtODguMzIgLTg4LjMyLC04OC4zMmMtNDguNzAyNzIsMCAtODguMzIsMzkuNjIxMTIgLTg4LjMyLDg4LjMyYzAsMzkuMDI5NzYgMjUuNDU5Miw3Mi4yMDczNiA2MC42Mzc0NCw4My44NTAyNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
    },
    {
        name: 'linkedIn',
        title: 'Szymon Sieradzki',
        src: '#',
        imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2RhYTUyMCI+PHBhdGggZD0iTTE1Ny40NCwxNS4zNmgtMTIyLjg4Yy0xMC41OTg0LDAgLTE5LjIsOC42MDE2IC0xOS4yLDE5LjJ2MTIyLjg4YzAsMTAuNTk4NCA4LjYwMTYsMTkuMiAxOS4yLDE5LjJoMTIyLjg4YzEwLjU5ODQsMCAxOS4yLC04LjYwMTYgMTkuMiwtMTkuMnYtMTIyLjg4YzAsLTEwLjU5ODQgLTguNjAxNiwtMTkuMiAtMTkuMiwtMTkuMnpNNjUuMjgsNzYuOHY3Mi45NmgtMjMuMDR2LTcyLjk2ek00Mi4yNCw1NS41NjQ4YzAsLTUuMzc2IDQuNjA4LC05LjQ4NDggMTEuNTIsLTkuNDg0OGM2LjkxMiwwIDExLjI1MTIsNC4xMDg4IDExLjUyLDkuNDg0OGMwLDUuMzc2IC00LjMwMDgsOS43MTUyIC0xMS41Miw5LjcxNTJjLTYuOTEyLDAgLTExLjUyLC00LjMzOTIgLTExLjUyLC05LjcxNTJ6TTE0OS43NiwxNDkuNzZoLTIzLjA0YzAsMCAwLC0zNS41NTg0IDAsLTM4LjRjMCwtNy42OCAtMy44NCwtMTUuMzYgLTEzLjQ0LC0xNS41MTM2aC0wLjMwNzJjLTkuMjkyOCwwIC0xMy4xMzI4LDcuOTEwNCAtMTMuMTMyOCwxNS41MTM2YzAsMy40OTQ0IDAsMzguNCAwLDM4LjRoLTIzLjA0di03Mi45NmgyMy4wNHY5LjgzMDRjMCwwIDcuNDExMiwtOS44MzA0IDIyLjMxMDQsLTkuODMwNGMxNS4yNDQ4LDAgMjcuNjA5NiwxMC40ODMyIDI3LjYwOTYsMzEuNzE4NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
    },
    {
        name: 'twitter',
        title: '@H4kan5',
        src: 'https://twitter.com/H4kan5',
        imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2RhYTUyMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTkyLjI0LDQwLjA4Yy03LjA5NSwzLjE1IC0xNC43LDUuMjY1IC0yMi42OTUsNi4yMjVjOC4xNiwtNC44OSAxNC40MywtMTIuNjMgMTcuMzcsLTIxLjg0Yy03LjYyLDQuNTE1IC0xNi4wOTUsNy44IC0yNS4wOCw5LjU3Yy03LjIsLTcuNjggLTE3LjQ2LC0xMi40NjUgLTI4LjgxNSwtMTIuNDY1Yy0yMS44MSwwIC0zOS40OTUsMTcuNjcgLTM5LjQ5NSwzOS40OGMwLDMuMDkgMC4zNiw2LjEwNSAxLjAzNSw5Yy0zMi44MiwtMS42NSAtNjEuOTA1LC0xNy4zNyAtODEuMzksLTQxLjI2NWMtMy40MDUsNS44NSAtNS4zNCwxMi42MyAtNS4zNCwxOS44NmMwLDEzLjY5NSA2Ljk2LDI1Ljc4NSAxNy41NjUsMzIuODhjLTYuNDgsLTAuMjEgLTEyLjU3LC0xLjk5NSAtMTcuODk1LC00Ljk1YzAsMC4xNjUgMCwwLjMzIDAsMC40OTVjMCwxOS4xNCAxMy42MiwzNS4wODUgMzEuNjY1LDM4LjczYy0zLjMsMC45IC02Ljc5NSwxLjM4IC0xMC4zOTUsMS4zOGMtMi41NSwwIC01LjAyNSwtMC4yNCAtNy40NCwtMC43MmM1LjA0LDE1LjY3NSAxOS42MiwyNy4xMiAzNi44ODUsMjcuNDM1Yy0xMy41LDEwLjU5IC0zMC41MjUsMTYuODkgLTQ5LjAzNSwxNi44OWMtMy4xOTUsMCAtNi4zMywtMC4xOCAtOS40MDUsLTAuNTU1YzE3LjQ2LDExLjIyIDM4LjIyLDE3Ljc0NSA2MC41MjUsMTcuNzQ1YzcyLjYzLDAgMTEyLjM1LC02MC4xNjUgMTEyLjM1LC0xMTIuMzM1YzAsLTEuNzEgLTAuMDQ1LC0zLjQzNSAtMC4xMDUsLTUuMTE1YzcuNzEsLTUuNTY1IDE0LjQsLTEyLjUyNSAxOS42OTUsLTIwLjQ0NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=',
    }

]

const SocialMedia = () => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 7 / 3 * window.innerHeight) {
            document.querySelector('div.socialMedia').classList.add('activeSocial');
        }
    });
    let boxes = [];
    for (let i = 0; i < socials.length; i++)
        boxes.push(<Social social={socials[i]} />)

    return (
        <div className="socialMedia">
            <h3>Contact through other medias</h3>
            {boxes}
        </div>
    );
}

export default SocialMedia;