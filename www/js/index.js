/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {

    // Variavel Global
    var setIntevalVar;
    var imagem;

    // this.receivedEvent('deviceready');

    // Esconder e mostrar Bototões de Partilha
    document.getElementById("bottonCameraShow").classList.remove('hide');
    document.getElementById("bottonCameraShow").classList.add('show');

    // Botao Tirar Foto
    document.getElementById('startCameraAboveButton').addEventListener('click', this.startCameraAbove, false);


    // Botão partilhar Facebook
    document.getElementById('shareFacebook').addEventListener('click', this.shareFacebook, false);
    // Botão partilhar Instagram
    document.getElementById('shareInstagram').addEventListener('click', this.shareInstagram, false);

  },

  // Update DOM on a Received Event

  //Abrir Camera
  startCameraAbove: function () {
    CameraPreview.startCamera({
      // Definiçoes Camera
      x: 50,
      y: 50,
      width: 300,
      height: 300,
      //Usar Camera de tras
      camera: CameraPreview.CAMERA_DIRECTION.BACK,

      toBack: false, // Alterado
      previewDrag: false,
      tapPhoto: false
    });

    // Ativar Sensor de Proximidade
    navigator.proximity.enableSensor();

    // Aviso
    ons.notification.toast('Aproxime Camera do Corpo', {
      timeout: 2000
    });


    // Usar o sensor a Cada Segundo (1000 milSegundos = 1 segundo)
    setIntevalVar = setInterval(function () {
      app.getProximityState();
    }, 1000);

  },

  // Saber Distancia do telemovel
  getProximityState: function () {
    navigator.proximity.getProximityState(app.onSuccess);


    //app.stopInterval();
  },

  // Caso o sensor funcione tirar foto
  onSuccess: function (state) {

    // alert('Proximity state: ' + (state ? 'near' : 'far'));

    // State é boolean
    // True = Proximo 
    // False = Longe

    var tirarPhoto = state;

    // Se estiver Proximo tirar Foto e desligar Sensor
    if (tirarPhoto == true) {

      app.takePicture();

      this.tirarPhoto = null;

    }

  },

  // Tirar foto e mostrar na APP
  takePicture: function () {

    CameraPreview.takePicture({
      quality: 100
    }, function (imgData) {

      app.imagem = 'data:image/jpeg;base64,' + imgData;

      console.log(imgData);

      document.getElementById('originalPicture').src = app.imagem;

      console.log(document.getElementById('originalPicture').src)


      navigator.proximity.disableSensor();

      app.stopInterval();

      app.stopCamera();

      // Esconder e mostrar Bototões de Partilha
      // document.getElementById("shareFacebook").classList.remove('hide');
      // document.getElementById("shareFacebook").classList.add('show');

      // document.getElementById("shareInstagram").classList.remove('hide');
      // document.getElementById("shareInstagram").classList.add('show');

      document.getElementById("bottonShow").classList.remove('hide');
      document.getElementById("bottonShow").classList.add('show');



    });
  },

  // Parar o intervalo do sensor
  stopInterval: function () {

    clearInterval(app.setIntevalVar);
  },

  // Desligar Camera
  stopCamera: function () {
    CameraPreview.stopCamera();
  },

  // Partilhar no Facebook
  shareFacebook: function () {

    var img = document.getElementById('originalPicture').src

    window.plugins.socialsharing
      .shareViaFacebookWithPasteMessageHint('Message via Facebook', img);

    // window.plugins.socialsharing
    //   .shareViaFacebook('Shared via Heart View APP', img); // , 'http://www.islagaia.pt');

  },

  // Partilhar no Instagram
  shareInstagram: function () {

    var img = document.getElementById('originalPicture').src

    window.plugins.socialsharing
      .shareViaInstagram('Shared via Heart View APP', img);
  }


};

app.initialize();
