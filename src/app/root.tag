<app-root>
  <parts-header></parts-header>
  <h2>{title}</h2>
  <div>
    {clickCount}
  </div>
  <div>
    API: {apiData}
  </div>
  <style type="less">
    :scope {
      display: flex;
      flex-direction: column;
      border: 1px solid;
    }

    > img {
      width: 200px;
    }

    > h2 {
      color: blue;
    }
  </style>
  <script>
    import './parts/header/header.tag'
    import root from './root.js'
    root(this)
  </script>
</app-root>
