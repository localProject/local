import axios from "axios";
import React, { Component } from "react";
import "./FancyBanner.css";
import { Link } from 'react-router-dom'
import {withUser} from "../../services/withUser";
import {update} from "../../services/withUser";

class FancyBanner extends Component {
  state= {
    img : [
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzI3NS43MDAwMyA4MDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTUzNC42NTM1MyIgeTE9IjEwNC4wNDYwOSIgeDI9Ijc1NS4wOTQyMSIgeTI9IjE0NTQuMjgyNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmMjlmNWEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NDE0NjYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSIxNDU2LjU3Mjk3IiB5MT0iMjE0LjU3MTY2IiB4Mj0iNzMwLjQ4MTk1IiB5Mj0iMTQ3Mi4xOTgxOSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTMiIHgxPSIxMzczLjk1MDMiIHkxPSIzMzIuODU4MTciIHgyPSI4MjUuOTgwNTQiIHkyPSIxMjgxLjk2OTY0IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNCIgeDE9IjEyOTYuMTc2ODkiIHkxPSI0NTMuOTUwNTYiIHgyPSI2ODYuNTUxMDYiIHkyPSIxNTA5Ljg1MzQ4IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNSIgeDE9IjI1NTUuMDE1OTQiIHkxPSIxNDkuNjc0NTYiIHgyPSIxNDUzLjM3MzkxIiB5Mj0iMjA1Ny43NzQ1MiIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTYiIHgxPSIyNTIwLjE1MDkxIiB5MT0iMzA1Ljg2MjMzIiB4Mj0iMTU3NS43NzAzOCIgeTI9IjE5NDEuNTc3MzgiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC03IiB4MT0iMjQ4MC4zMDAyNSIgeTE9IjQ1Ny45NzEyNSIgeDI9IjE0MjguODQ1MDQiIHkyPSIyMjc5LjE0NTEiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC04IiB4MT0iMjQ0Mi41NTQ1NCIgeTE9IjU4NC40ODY0MyIgeDI9IjE1MDkuNTU3NzgiIHkyPSIyMjMzLjcyMzExIiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PC9kZWZzPjx0aXRsZT5wYXJ0bmVyLWN1cnZlczwvdGl0bGU+PHBhdGggZD0iTTQ0OC4zNjgwNSwzMDQuNTQ0MTNjLTU2LjE0NzQ2LDEzMy42ODg0OC01NS43Mzg3NywyOTEuMDEyNDUtNTUuNzM4NzcsMjkxLjAxMjQ1bC04Ljc1NzkzLDIwNC40NDMzNkgyMTA5LjIyNTY2QzE5NzUuNTcsNjc3LjU3LDE4ODcuMDAzODYsNTY5LjE1NjY4LDE3NTguMDM2MzMsMzY3LjQxMDM0LDE2NTcuNDgxODgsMjEwLjExMTM5LDE1MTQuMDAzMTIsNzYuMjM2LDEzNDYuODI4MzguMDAwMDZINzQyLjA2MDY4QzU4NS4xNDkyNCw3My4yNTU2OCw0OTcuNzYwMjYsMTg2LjkzOTI3LDQ0OC4zNjgwNSwzMDQuNTQ0MTNaIiBvcGFjaXR5PSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPjxwYXRoIGQ9Ik00MDguOTgxMTIsNzk5Ljk5OTk0SDE5NjYuODUxOTFjLTYwLjg3NjUzLTcyLjQ4NTExLTExOS43MDQ4My0xNTUuMzQ4LTE5MC44MTctMjY2LjU5MDA5QzE1NzcuODM5MzksMjIzLjM2OTIsMTIxMi44ODc2Nyw0LjMxODU0LDgyOC40MDU1NiwxMzguMjk4NzdjLTIwMC42NjIyMyw2OS45MjQ2OC0zMDUuODkxNzIsMTk4LjU1NjQtMzYyLjAzODgyLDMzMi4yNDQ4N0M0MTAuMjE5MjgsNjA0LjIzMjEyLDQxMC42MjgsNzYxLjU1NjA5LDQxMC42MjgsNzYxLjU1NjA5WiIgb3BhY2l0eT0iMC4yIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPjxwYXRoIGQ9Ik0xODQyLjMzMjUzLDc5OS45OTk4Yy0yMS4xMTQ3NS0zMC45MTkxOS00My4wNC02NC4yMzgyOC02Ni4yNzgwOC0xMDAuNTlDMTU3Ny44NTg5LDM4OS4zNjkxOSwxMjEyLjkwNzI0LDE3MC4zMTg2NSw4MjguNDI1MywzMDQuMjk4NjNjLTIwMC42NjI2LDY5LjkyNDgtMzA1Ljg5MjA5LDE5OC41NTY2NC0zNjIuMDM5MDYsMzMyLjI0NS0yMi45NTU1Nyw1NC42NTc1OS0zNi40NTYwNSwxMTMuMjYzNzktNDQuMzk3NDYsMTYzLjQ1NjE4WiIgb3BhY2l0eT0iMC4yIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0zKSIvPjxwYXRoIGQ9Ik0xNzMwLjc0NzkxLDc5OS45OTkzOGMtMjA1LjQ5NzgtMjc0LjMyMTktNTQ1LjQ5LTQ1NC4wNDExNC05MDIuMzA3NjItMzI5LjcwMTE3QzYyOS4wNTEzNyw1MzkuNzc5MTcsNTIzLjg5NjU5LDY2Ny4yMjU0LDQ2Ny40ODUsNzk5Ljk5OTM4WiIgb3BhY2l0eT0iMC4yIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC00KSIvPjxwYXRoIGQ9Ik0xNzk3LjMzMzU3LDQyNy44Njg3MWMyMy4yMzM0LDM1LjA4MTMsNDUuMzE3MzgsNjcuMTU5NjcsNjYuODQ4MTQsOTYuOTgzNzYsMjUuOTc3NTQsMzUuOTgzNjQsNTEuMTUyMzQsNjguNjkwMDYsNzYuNTczMjQsOTkuNDM1Myw1Mi4wOTc5LDYzLjAwOTE2LDEwNS4yNDAyNCwxMTcuNzkyNiwxNjguNDcwNywxNzUuNzEyMTZoNzgyLjYwM1Y3NTMuMTUzNzVjMC02OTQuODU0ODYtNjgzLjg4OTE2LTgyNy4xOTE3Ny0xMTU1Ljc1OTc3LTQxOC43MjM1MXExMS4yODgwOSwxNi4yOTk2OCwyMS45NTM2MSwzMi45Njk0OFExNzc4LjI5NiwzOTkuMTEyODUsMTc5Ny4zMzM1Nyw0MjcuODY4NzFaIiBvcGFjaXR5PSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTUpIi8+PHBhdGggZD0iTTE5NDAuNzU1LDYyNC4yODc3OGM1Mi4wOTc5LDYzLjAwOTIyLDEwNS4yNDAyNCwxMTcuNzkyNTQsMTY4LjQ3MDcsMTc1LjcxMjE2aDc3OC4wMTE3MmMtNTcuNTkzNzUtNTgzLjI1NC02NDUuNzE1MDktNzAxLjg0OTg1LTEwODkuOTAzODEtMzcyLjEzMTI5LDIzLjIzMzQsMzUuMDgxMzYsNDUuMzE3MzgsNjcuMTU5NzMsNjYuODQ4MTQsOTYuOTgzODNDMTg5MC4xNTkyNSw1NjAuODM2MTIsMTkxNS4zMzQwNiw1OTMuNTQyNTQsMTk0MC43NTUsNjI0LjI4Nzc4WiIgb3BhY2l0eT0iMC4yIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC02KSIvPjxwYXRoIGQ9Ik0yMTA5LjIyNTksNzk5Ljk5OTk0aDc1MS4xMDg2NEMyNzM0Ljg4Mzg2LDM2Ni44MjQxNiwyMjU4LjM1NywyNzguNjA0MTksMTg2NC4xODE3MSw1MjQuODUyNDhjMjUuOTc3NTQsMzUuOTgzNjQsNTEuMTUyMzQsNjguNjkwMTksNzYuNTczMjQsOTkuNDM1M0MxOTkyLjg1MzEsNjg3LjI5NzA2LDIwNDUuOTk1NjgsNzQyLjA4MDM4LDIxMDkuMjI1OSw3OTkuOTk5OTRaIiBvcGFjaXR5PSIwLjIiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTcpIi8+PHBhdGggZD0iTTIxMDkuMjI1NjYsNzk5Ljk5OTk0aDY5MC42NTFjLTE2Ni40NTMtMjg0LjY4NTU1LTUzMC44OTAyNi0zNDEuMzU4MTUtODU5LjA5Mzg3LTE3NS42ODY3N0MxOTkyLjg3MzEyLDY4Ny4zMTMxNywyMDQ2LjAwNzY0LDc0Mi4wODk3OCwyMTA5LjIyNTY2LDc5OS45OTk5NFoiIG9wYWNpdHk9IjAuMiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtOCkiLz48L3N2Zz4=',
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMjc1LjcgMTE4My4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjc1LjcgMTE4My4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC4yO30KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qye29wYWNpdHk6MC4yO2ZpbGw6dXJsKCNTVkdJRF8yXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3Qze2ZpbGw6dXJsKCNTVkdJRF8zXyk7fQoJLnN0NHtvcGFjaXR5OjAuMjtmaWxsOnVybCgjU1ZHSURfNF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0NXtmaWxsOnVybCgjU1ZHSURfNV8pO30KCS5zdDZ7b3BhY2l0eTowLjI7ZmlsbDp1cmwoI1NWR0lEXzZfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDd7ZmlsbDp1cmwoI1NWR0lEXzdfKTt9Cgkuc3Q4e29wYWNpdHk6MC4yO2ZpbGw6dXJsKCNTVkdJRF84Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxnIGNsYXNzPSJzdDAiPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMzM2Ljc1IiB5MT0iLTIwNS40NDg1IiB4Mj0iMTMzNi43NSIgeTI9IjE5MzMuNjA3OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDExODYpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0wLDc5Mi43YzQzLjYsODcuNywxMDUuOCwxNzkuOSwxOTQuNSwyNjYuNmM0Ni40LDQ1LjQsOTcuOCw4Ni44LDE1My42LDEyMy45aDE2MDQuMwoJCWMzMDYuOS0xNDEsNDg1LjQtMzA4LjEsNzIxLjEtNjEzLjJjLTE5My42LTE2NC40LTMzMy4zLTMxNy01MTYuNy01NzBIMFY3OTIuN3oiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTMzNi43NSIgeTE9IjIuNzk5OSIgeDI9IjEzMzYuNzUiIHkyPSIxMTg1Ljk5OTkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMTg2KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMCw3OTIuN2M0My42LDg3LjcsMTA1LjgsMTc5LjksMTk0LjUsMjY2LjZjNDYuNCw0NS40LDk3LjgsODYuOCwxNTMuNiwxMjMuOWgxNjA0LjMKCQljMzA2LjktMTQxLDQ4NS40LTMwOC4xLDcyMS4xLTYxMy4yYy0xOTMuNi0xNjQuNC0zMzMuMy0zMTctNTE2LjctNTcwSDBWNzkyLjd6Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI5NzQuNTk5OSIgeTE9Ijk5LjI0NTciIHgyPSIyOTc0LjU5OTkiIHkyPSIxMzU4LjgzNjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMTg2KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjg2OC41LDMwNy40Yy03MC45LDk4LjEtMTM0LjcsMTg0LjYtMTk1LDI2Mi42YzY5LjUsNTkuMSwxNDUuOSwxMTkuNywyMzMuOSwxODcKCQljODQuNSw2NC43LDIxNi43LDE0MywzNjguMywyMDcuMVYwaC05MS40QzMwNjkuMSw3NywyOTYxLDE3OS41LDI4NjguNSwzMDcuNHoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjk3NC41OTk5IiB5MT0iMjIxLjkiIHgyPSIyOTc0LjU5OTkiIHkyPSIxMTg2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTE4NikiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTI4NjguNSwzMDcuNGMtNzAuOSw5OC4xLTEzNC43LDE4NC42LTE5NSwyNjIuNmM2OS41LDU5LjEsMTQ1LjksMTE5LjcsMjMzLjksMTg3CgkJYzg0LjUsNjQuNywyMTYuNywxNDMsMzY4LjMsMjA3LjFWMGgtOTEuNEMzMDY5LjEsNzcsMjk2MSwxNzkuNSwyODY4LjUsMzA3LjR6Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzVfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE3NC4wNSIgeTE9Ii0xOTY0LjUyOTMiIHgyPSIxNzQuMDUiIHkyPSI3ODkuMzE0NyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDExODYpIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0wLDc5Mi43djM5MC41aDM0OC4xYy01NS45LTM3LjEtMTA3LjMtNzguNi0xNTMuNi0xMjMuOUMxMDUuOCw5NzIuNiw0My42LDg4MC40LDAsNzkyLjd6Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzZfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE3NC4wNSIgeTE9IjIuOCIgeDI9IjE3NC4wNSIgeTI9IjM5My4zIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTE4NikiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggY2xhc3M9InN0NiIgZD0iTTAsNzkyLjd2MzkwLjVoMzQ4LjFjLTU1LjktMzcuMS0xMDcuMy03OC42LTE1My42LTEyMy45QzEwNS44LDk3Mi42LDQzLjYsODgwLjQsMCw3OTIuN3oiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfN18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjYxNC4wNSIgeTE9Ii0xOTY0LjUyOTMiIHgyPSIyNjE0LjA1IiB5Mj0iNzg5LjMxNDciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMTg2KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMjY3My41LDU3MGMtMjM1LjcsMzA1LjEtNDE0LjIsNDcyLjItNzIxLjEsNjEzLjJoMTMyMy4zdi0yMTljLTE1MS42LTY0LjEtMjgzLjgtMTQyLjQtMzY4LjMtMjA3LjEKCQlDMjgxOS40LDY4OS43LDI3NDMsNjI5LjEsMjY3My41LDU3MHoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfOF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjYxNC4wNSIgeTE9IjIuOCIgeDI9IjI2MTQuMDUiIHkyPSI2MTYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMTg2KSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3Q4IiBkPSJNMjY3My41LDU3MGMtMjM1LjcsMzA1LjEtNDE0LjIsNDcyLjItNzIxLjEsNjEzLjJoMTMyMy4zdi0yMTljLTE1MS42LTY0LjEtMjgzLjgtMTQyLjQtMzY4LjMtMjA3LjEKCQlDMjgxOS40LDY4OS43LDI3NDMsNjI5LjEsMjY3My41LDU3MHoiLz4KPC9nPgo8L3N2Zz4K',
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAwMCA3MDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTM2OS4wMDA2NyIgeTE9IjE4MS45NDk3MyIgeDI9IjE1MzIuMjU0NTQiIHkyPSItMTAwLjgxNDI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSIxNjY5Ljc4NTk5IiB5MT0iODAwLjQzOTI3IiB4Mj0iMTg0MC4xMTIzIiB5Mj0iNTA1LjQyNTQ0IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMyIgeDE9IjEwMzkuNTg1NDUiIHkxPSI3OTkuOTU5NzkiIHgyPSIxMTg5Ljk5OTAzIiB5Mj0iNTM5LjQzNTgyIiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNCIgeDE9IjQyNC44MTgwMiIgeTE9Ijc4MC44OTcxNyIgeDI9IjYzOC4xMzk4NyIgeTI9IjQxMS40MTI4OSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTUiIHgxPSIwLjAyNzU0IiB5MT0iMjg0LjA0NTg3IiB4Mj0iMTg4Ljk1MzYyIiB5Mj0iLTQzLjE4MzcxIiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNiIgeDE9IjEwNTUuNjgwMTciIHkxPSIxNDEuOTU5NzUiIHgyPSIxMTcwLjA5OCIgeTI9Ii01Ni4yMTc3MyIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTciIHgxPSIzODYuNjgzOTciIHkxPSIxNDEuOTU2NDIiIHgyPSI1MDEuMDk5NDEiIHkyPSItNTYuMjE2OTIiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC04IiB4MT0iMjE1LjczNzg1IiB5MT0iNTQ4LjUyNzc0IiB4Mj0iMzYxLjI2MjE1IiB5Mj0iMjk2LjQ3MjI2IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtOSIgeDE9IjE4NjcuNzk4MDIiIHkxPSIyMTYuNzQ3NCIgeDI9IjE5OTQuNzAyODkiIHkyPSItMy4wNTgyOSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTEwIiB4MT0iNzQ1LjYzODkyIiB5MT0iNzU4LjY0MDg0IiB4Mj0iODUyLjgxMDIzIiB5Mj0iNTczLjAxNDY5IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTEiIHgxPSIxMjI4LjI0NTEyIiB5MT0iMTYyLjE3MDk1IiB4Mj0iMTI4Ni43NTQ4OCIgeTI9IjYwLjgyOTA1IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTIiIHgxPSIxODA1LjI0NTEyIiB5MT0iMjU3LjE3MDk1IiB4Mj0iMTg2My43NTQ4OCIgeTI9IjE1NS44MjkwNSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTEzIiB4MT0iNjY1Ljk5NzU4IiB5MT0iMjEyLjExODkzIiB4Mj0iNjk1LjAwMjQyIiB5Mj0iMTYxLjg4MTA3IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTQiIHgxPSIzMi40OTc1OCIgeTE9IjUyMi4xMTg5MyIgeDI9IjYxLjUwMjQyIiB5Mj0iNDcxLjg4MTA3IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTUiIHgxPSIxMzAyLjQ5NzU4IiB5MT0iMzAyLjExODkzIiB4Mj0iMTMzMS41MDI0MiIgeTI9IjI1MS44ODEwNyIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTE2IiB4MT0iMTcyNC40OTc1OCIgeTE9IjEyNS4xMTg5MyIgeDI9IjE3NTMuNTAyNDIiIHkyPSI3NC44ODEwNyIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTE3IiB4MT0iNjM2LjI0NTEyIiB5MT0iNDM4LjE3MDk1IiB4Mj0iNjk0Ljc1NDg4IiB5Mj0iMzM2LjgyOTA1IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTgiIHgxPSIxNTM0LjI0NTEyIiB5MT0iNDg5LjE3MDk1IiB4Mj0iMTU5Mi43NTQ4OCIgeTI9IjM4Ny44MjkwNSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTE5IiB4MT0iMzM3LjI0NTEyIiB5MT0iMTk4LjE3MDk1IiB4Mj0iMzk1Ljc1NDg4IiB5Mj0iOTYuODI5MDUiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yMCIgeDE9IjEzOS4yNDUxMiIgeTE9IjM5NC4xNzA5NSIgeDI9IjE5Ny43NTQ4OCIgeTI9IjI5Mi44MjkwNSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIxIiB4MT0iLTEyLjg0MzYzIiB5MT0iNDk3LjU3NDcyIiB4Mj0iNDEuNjEyMjUiIHkyPSI0MDMuMjU0MzYiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yMiIgeDE9IjE0OTIuNzQyMTkiIHkxPSIzMTAuNDg2OSIgeDI9IjE1ODYuMjU3ODEiIHkyPSIxNDguNTEzMSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIzIiB4MT0iMTkzMC45ODM4IiB5MT0iNzEwLjcwNjMiIHgyPSIyMDA2Ljk5NjA3IiB5Mj0iNTc5LjA0OTE5IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMjQiIHgxPSIxNzA2Ljc0MjE5IiB5MT0iNDk3LjQ4NjkiIHgyPSIxODAwLjI1NzgxIiB5Mj0iMzM1LjUxMzEiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yNSIgeDE9IjQwNi43NDIxOSIgeTE9IjQwOS40ODY5IiB4Mj0iNTAwLjI1NzgxIiB5Mj0iMjQ3LjUxMzEiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yNiIgeDE9IjEwOTcuNzQyMTkiIHkxPSI1NjIuNDg2OSIgeDI9IjExOTEuMjU3ODEiIHkyPSI0MDAuNTEzMSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjwvZGVmcz48dGl0bGU+Y29tbXVuaXR5LWhlYWRlci1iZzwvdGl0bGU+PHBhdGggZD0iTTE3MDYuODcsMGEyNDUuMDc2NjMsMjQ1LjA3NjYzLDAsMCwxLTEwNS42LDE1OS4zQTI0My44MDg2NSwyNDMuODA4NjUsMCwwLDEsMTQ2NiwyMDBxLTcuNjA1MSwwLTE1LjEtLjQ2YTI0My44ODYzOSwyNDMuODg2MzksMCwwLDEtMTQzLjM4LTU3LjY5QTI0Ni4xMDQyOCwyNDYuMTA0MjgsMCwwLDEsMTI1My4yLDc2LjVRMTI0Ny4yMyw2Ni4wNiwxMjQyLjI3LDU1YTI0Mi43NjcxMiwyNDIuNzY3MTIsMCwwLDEtMTcuMTQtNTVaIiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPjxwYXRoIGQ9Ik0xOTgyLjE3OTkzLDcwMEgxNDk1LjgyMDA3YzEyLjk5LTEwNi40NSw5NC4yNi0xOTEuODEsMTk4LjY3OTkzLTIxMC45NkEyNDUuMDIzMywyNDUuMDIzMywwLDAsMSwxOTgyLjE3OTkzLDcwMFoiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMikiLz48cGF0aCBkPSJNMTMzNS41NSw3MDBIODY2LjQ1YTI0NS4zMzg0LDI0NS4zMzg0LDAsMCwxLDE5Ny4zODAwNy0xNzEuMkEyNDcuNDk0MDUsMjQ3LjQ5NDA1LDAsMCwxLDExMDEsNTI2YTI0NC44ODI1NiwyNDQuODgyNTYsMCwwLDEsMjM0LjU1LDE3NFoiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMykiLz48cGF0aCBkPSJNNzYzLDYyNWEyNDQuNjMwNzQsMjQ0LjYzMDc0LDAsMCwxLTExLjcsNzVIMjg0LjdBMjQ0Ljg4OTc2LDI0NC44ODk3NiwwLDAsMSw1MTgsMzgwcTYuNzA1LDAsMTMuMzEuMzZBMjQ0LjcxNjY1LDI0NC43MTY2NSwwLDAsMSw3NjMsNjI1WiIgb3BhY2l0eT0iMC4zIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC00KSIvPjxwYXRoIGQ9Ik0yNjcsNDBjMCwxMzUuMzEtMTA5LjY5LDI0NS0yNDUsMjQ1cS0xMS4xMTUsMC0yMi0uOTdWMEgyNjMuNzVBMjQ2LjQ3ODc4LDI0Ni40Nzg3OCwwLDAsMSwyNjcsNDBaIiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTUpIi8+PHBhdGggZD0iTTEyNjgsMTIuNWExNDUuMzM3NTgsMTQ1LjMzNzU4LDAsMCwxLTUuNzcsNDAuNjksMTQzLjI5NTQsMTQzLjI5NTQsMCwwLDEtOS4wMywyMy4zMUExNDUuOTgxMjEsMTQ1Ljk4MTIxLDAsMCwxLDEyMDMuMjksMTMzLjUyLDE0NC43Mzc5MywxNDQuNzM3OTMsMCwwLDEsMTEyMi41LDE1OCwxNDUuNDk2NzMsMTQ1LjQ5NjczLDAsMCwxLDk3NywxMi41cTAtNi4zMTUuNTMtMTIuNUgxMjY3LjQ3UTEyNjcuOTk1MTIsNi4xOCwxMjY4LDEyLjVaIiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTYpIi8+PHBhdGggZD0iTTU5OSwxMi41QTE0NS40OTY3MywxNDUuNDk2NzMsMCwwLDEsNDUzLjUsMTU4YTE0NS43MjQwNywxNDUuNzI0MDcsMCwwLDEtMjguOTktMi44OSwxNDUuNTkzMzcsMTQ1LjU5MzM3LDAsMCwxLTg4Ljg5LTU3LjNBMTQ0Ljc4OTU2LDE0NC43ODk1NiwwLDAsMSwzMDgsMTIuNXEwLTYuMzE1LjUzLTEyLjVINTk4LjQ3UTU5OC45OTUsNi4xOCw1OTksMTIuNVoiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtNykiLz48Y2lyY2xlIGN4PSIyODguNSIgY3k9IjQyMi41IiByPSIxNDUuNSIgb3BhY2l0eT0iMC4zIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC04KSIvPjxwYXRoIGQ9Ik0yMDAwLDBWMjM5LjY5QTE0NS41MTE3OCwxNDUuNTExNzgsMCwwLDEsMTg1Mi4zLDBaIiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTkpIi8+PHBhdGggZD0iTTkzNC45Myw3MDBINjQ0LjA3YTE0NS40OTg3MSwxNDUuNDk4NzEsMCwwLDEsMjkwLjg2LDBaIiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTEwKSIvPjxjaXJjbGUgY3g9IjEyNTcuNSIgY3k9IjExMS41IiByPSI1OC41IiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTExKSIvPjxjaXJjbGUgY3g9IjE4MzQuNSIgY3k9IjIwNi41IiByPSI1OC41IiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTEyKSIvPjxjaXJjbGUgY3g9IjY4MC41IiBjeT0iMTg3IiByPSIyOSIgb3BhY2l0eT0iMC4zIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0xMykiLz48Y2lyY2xlIGN4PSI0NyIgY3k9IjQ5NyIgcj0iMjkiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMTQpIi8+PGNpcmNsZSBjeD0iMTMxNyIgY3k9IjI3NyIgcj0iMjkiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMTUpIi8+PGNpcmNsZSBjeD0iMTczOSIgY3k9IjEwMCIgcj0iMjkiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMTYpIi8+PGNpcmNsZSBjeD0iNjY1LjUiIGN5PSIzODcuNSIgcj0iNTguNSIgb3BhY2l0eT0iMC4zIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0xNykiLz48Y2lyY2xlIGN4PSIxNTYzLjUiIGN5PSI0MzguNSIgcj0iNTguNSIgb3BhY2l0eT0iMC4zIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0xOCkiLz48Y2lyY2xlIGN4PSIzNjYuNSIgY3k9IjE0Ny41IiByPSI1OC41IiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTE5KSIvPjxjaXJjbGUgY3g9IjE2OC41IiBjeT0iMzQzLjUiIHI9IjU4LjUiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMjApIi8+PHBhdGggZD0iTTU4LDQ0Ni41YTU4LjI0NSw1OC4yNDUsMCwwLDEtNC4zOSwyMi4yNiw1OC42NTc2Niw1OC42NTc2NiwwLDAsMS0zNS4yLDMzLjEyQTU4LjM3NTM1LDU4LjM3NTM1LDAsMCwxLDAsNTA0Ljk5VjM4OC4wMUE1OC40ODc4Miw1OC40ODc4MiwwLDAsMSw1OCw0NDYuNVoiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMjEpIi8+PGNpcmNsZSBjeD0iMTUzOS41IiBjeT0iMjI5LjUiIHI9IjkzLjUiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMjIpIi8+PHBhdGggZD0iTTIwMDAsNTc1LjAxVjcwMGgtODcuNTYwMDZBOTMuNTExMDYsOTMuNTExMDYsMCwwLDEsMjAwMCw1NzUuMDFaIiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTIzKSIvPjxjaXJjbGUgY3g9IjE3NTMuNSIgY3k9IjQxNi41IiByPSI5My41IiBvcGFjaXR5PSIwLjMiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTI0KSIvPjxjaXJjbGUgY3g9IjQ1My41IiBjeT0iMzI4LjUiIHI9IjkzLjUiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMjUpIi8+PGNpcmNsZSBjeD0iMTE0NC41IiBjeT0iNDgxLjUiIHI9IjkzLjUiIG9wYWNpdHk9IjAuMyIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMjYpIi8+PC9zdmc+',
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAwIDgwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7b3BhY2l0eTowLjE0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y2FydC1jcnV2ZXMtMjwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAwMCwwVjYzOC43M2MtMTk1LjE1OTkxLTE0Mi43NS01ODMuODMwMDgtMzkwLjU1LTk2Ni4zMy00MjEuNDEtMzY3LjktMjkuNjktNjE5LjU2LDg0LjU0LTk3My41NCwxODMuNTJDOTA1LjgsNDQzLjk5LDczMi4wMiw0ODQuMjUsNTIwLjY4LDUwOC40MSwzMjYuMTksNTMwLjY1LDE1MC44MSw1NDAuMTMsMCw1NDIuNDFWMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMDAwLDBWMzk2LjI1Yy0xODcuNjItOTguMzgtNjMyLjQ2LTMwMS45OS0xMDcyLjc4LTI4NS4yN0MxNTg4LjcxLDEyMy44MywxMzUyLjc0LDI1NC43MiwxMDYwLjEzLDQwMC44NCw4OTQuOTQsNDgzLjMzLDcxMS42OSw1NzAuNjcsNDgxLjc1LDY0NC4zNkE0MDg4LjM2Njg4LDQwODguMzY2ODgsMCwwLDEsMCw3NjcuMzhWMFoiLz48L3N2Zz4='
    ],
    gradient : [
        'linear-gradient( 135deg, #000000 10%, #434343 100%) no-repeat scroll center center/cover',
        'linear-gradient( 135deg, #000000 10%, #434343 100%) no-repeat scroll center center/cover',
        'linear-gradient( 135deg, #000000 10%, #434343 100%) no-repeat scroll center center/cover'
    ]

  }
  
  handleClick = () => {
       this.props.history.push('/login');
  };

  handleLogout = e => {
    e.preventDefault();
    axios.delete("/api/auth")
      .then(() => {
        this.props.clearUser();
        update(null);
    }).catch((err) => {
      console.log(err);
    });
  }

    
  render() {
    let displayUser;
    if (this.props.user) {
      displayUser = (
        <div>
          <div class="status">Welcome, {this.props.user.username}!</div>
          <div class="manage">
            <Link to="/artisan">Manage Account</Link>
            <button class="logout" onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      )
    } else {
      displayUser = (
        <div>
          <Link to="/login" class="status">Sign In</Link>
          <div class="manage">Welcome, guest!</div>
        </div>
      )
    }

      return(
    <div>
        <div class="banner">
      <div class="fancy-navbar" style={{'background': 
`url(${this.state.img[this.props.img]})
no-repeat scroll center center/cover border-box , ${this.state.gradient[this.props.gradient]}`,
'height': this.props.height}}>
        <div class="links">
          <Link to='/' class="nav"> Home </Link>

          <Link to='/products' class="nav"> Store </Link>
          <Link to='/about' class="nav"> About </Link>
          </div>
        
        <div class="account">
          {/*<div class="profile-pic" />*/}
          <div class="login-info">
            <div class="username" />
            <span class="pulse-button" />
            {displayUser}
          </div>
        </div>

        <div class="info">
          <div class="about">local.</div>
          <div class="about small">{this.props.subtitle}</div>
        </div>
      </div>
      <div class="curve-bottom-1" />
      </div>
    </div>
      );
  };
};

export default withUser(FancyBanner);