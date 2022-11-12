### Link your theory in here

 <div class="content" id="experiment-article-section-2-content">                            
                            <div align="center" class="big" style="text-decoration:underline;" > Part I </div>
                      IC 7483 is 4-bit binary full adder which accepts two 4-bit binary words A<sub>3</sub>A<sub>2</sub>A<sub>1</sub>A<sub>0</sub> and B<sub>3</sub>B<sub>2</sub>B<sub>1</sub>B<sub>0</sub> and a carry input (C<sub>0</sub>) as inputs and produces a 4-bit binary sum output S<sub>3</sub>S<sub>2</sub>S<sub>1</sub>S<sub>0</sub> and a carry output C<sub>4</sub>.
                            <br />
                            <div align="center">
                            <img src="images/1.png" style="width:300px;height:300px;"/> 
                            <br />
                            Figure 1
                            <br />
                            <br />
                             </div>
     The students of virtual DEC Laboratory can verify the functionality of the 7483 chip.Although in principle,there can be 2<sup>9</sup>=512 input paterns possible,the students can verify all zero,all one and some other patterns.<br />

 
 </div>
                                                     <div align="center" class="big" style="text-decoration:underline" > Part II </div>
                                                       <div align="left">
 Cascading of two 7483 chips to achieve addition of two 8-bit numbers A =  A<sub>8</sub>A<sub>7</sub>A<sub>6</sub>A<sub>5</sub>A<sub>4</sub>A<sub>3</sub>A<sub>2</sub>A<sub>1</sub> and B =  B<sub>8</sub>B<sub>7</sub>B<sub>6</sub>B<sub>5</sub>B<sub>4</sub>B<sub>3</sub>B<sub>2</sub>B<sub>1</sub> to produce Sum = S<sub>8</sub>S<sub>7</sub>S<sub>6</sub>S<sub>5</sub>S<sub>4</sub>S<sub>3</sub>S<sub>2</sub>S<sub>1</sub> and carry output C<sub>9</sub> of the 2<sup>17</sup> input patterns possible , the students can test the 8bit adder for all zeros , all ones and some other input patterns.  <br/>
                            <div align="center">
                            <img src="images/2.png" />
                             <br />
                            Figure 2
                            </div>
                             <div align="center" class="big" style="text-decoration:underline" > Part III </div> 
                             <div align="left">
 To implement a 4 bit adder/subtractor using 2's complement number system.Students learnt the use of 7486 (qued 2-input Ex-OR gates)in experiment 3.Using a 7483(parallel adder) and a 7486 chip one can realize 4 bit adder/subtractor.If ADD/SUB = "0" normal addition S = A + B performed.On the other hand if ADD/SUB = "1" then S = A + [B] + 1 where [B] = 1's complement of B.
 For example,if A = 0111(7) and B = 0101(5) then [B] = 1010 and S = 0010 or 2 neglecting carry out C<sub>4</sub>.If however A = 0101(5) and B = 0111(7) then B = 1000; or S = 1110 which represents -2 in 2's complement number system.
 <br/>
  <div align="center">
                            <img src="images/3.png" />
                             <br />
                            Figure 3                         
                        </div>